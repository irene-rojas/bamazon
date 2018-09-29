var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
   });
   
connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId);
// showBasicInfo();
});

// showAllInfo();
// function showAllInfo() {
//     console.log("Welcome to Irene's Animal House!");
//    connection.query("SELECT*FROM products", 
//    function(err,res) {
//        if(err) throw err;
//        console.log(res);
//        userPrompts();
//         })
//     };

showBasicInfo();
function showBasicInfo() {
    console.log("Welcome to Irene's Animal House!");
   connection.query("SELECT DISTINCT id, product_name, price FROM products", 
   function(err,res) {
       if(err) throw err;
       console.log(res);
       userPrompts();
        })
    };

// // inquirer
function userPrompts() {
inquirer.prompt([
   {
       type: "input",
       name: "buyWhat",
       message: "What would like to buy? Please use the ID."
   },
   {
       type: "input",
       name: "howMany",
       message: "How many would you like to buy?"
   }
    ])
    .then(function(answer) {
        connection.query("SELECT stock_quantity FROM products", 
        function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                if (answer >= 0) {
                    proceedPurchase();
                }
                else {
                    console.log("We're out of stock. Sorry!")
                    // showBasicInfo();
                };
            }
        })
    });

};