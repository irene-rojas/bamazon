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
showBasicInfo();
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

// showBasicInfo();
function showBasicInfo() {
    console.log("Welcome to Irene's Animal House!");
   connection.query("SELECT DISTINCT id, product_name, price FROM products", 
   function(err,res) {
       if(err) throw err;
       console.log(res);
       userPrompts();
        })
    };

// inquirer
// what does customer want and how many
// function userPrompts() {
// inquirer.prompt([
//    {
//        type: "input",
//        name: "buyWhat",
//        message: "What would like to buy? Please use the ID."
//    },
//    {
//        type: "input",
//        name: "howMany",
//        message: "How many would you like to buy?"
//    }
//     ])
//     .then(function(answer) {
//         connection.query("SELECT stock_quantity FROM products WHERE id='howMany'", 
//         function(err, res) {
//             if (answer <= 10) {
//                 proceedPurchase();
//             }
//             else {
                // console.log("We're out of stock of " + answer.buyWhat + ". Sorry!")
                // userPrompts();
//             };
//         })
//     });
// };

function userPrompts() {
    connection.query("SELECT*FROM products",
    function(err, res) {
        if (err) throw err;

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
            // var buyWhat = answer.buyWhat;
            // var howMany = answer.howMany;
            if (answer.howMany <= 10) {
                proceedPurchase();
            }
            else {
                console.log("We're out of " + answer.buyWhat + ".");
                userPrompts();
            }
        });
        })
    };

function proceedPurchase() {
    // delete number of items from stock_quantity
    connection.query("DELETE stock_quantity FROM products WHERE id='answer'",
    function(err, res) {
        
    }
    )



    // update remaining stock_quantity

    // show price
    // console.log("Here are howMany buyWhat")

};