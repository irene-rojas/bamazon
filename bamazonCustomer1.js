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
customerExchange();
});

function customerExchange() {
    console.log("Welcome to Irene's Animal House!");

    connection.query("SELECT*FROM products",
    function(err, res) {
        if (err) throw err;
        showBasicInfo();

        // show available products
        function showBasicInfo() {
           connection.query("SELECT DISTINCT id, product_name, price FROM products", 
           function(err,res) {
               if(err) throw err;
               console.log(res);
            //    userPrompts();
                })
            }

        inquirer.prompt([
            {
                name: "product_id",
                type: "input",
                // choices: function() {
                //     var choicesArray = [];
                //     for (var i = 0; i < res.length; i++) {
                //         choicesArray.push(res[i].product_name);
                //     }
                //     return choicesArray;
                // },
                message: "What would you like to buy? Please use the ID to order."
            },
            {
                name: "quantity",
                type: "input", 
                message: "How many do you want?"
            }
        ])
        .then(function(answer) {
            // need to figure out the chosen item
            var chosenItem;
            if (res[i].item_name === answer.choice) {
                chosenItem = res[i];
              }
            // if (chosenItem.id <= parseInt(answer.))

            // is chosen item in stock?

        });

    })

};
