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
    console.log("Welcome to Irene's Animal House! Choose from an array of cats, dogs, and fish!");

    connection.query("SELECT*FROM products",
    function(err, res) {
        if (err) throw err;

        inquirer.prompt([
            {
                // what can customer choose
                name: "userChoice",
                type: "list",
                choices: function() {
                    var choiceOptions = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceOptions.push(res[i].product_name);
                    }
                    return choiceOptions;
                },
                message: "What would you like to buy?"
            },
            {
                name: "quantity",
                type: "input", 
                message: "How many do you want?"
            }
        ])
        .then(function(answer) {
            console.log(answer);
            // what is chosen item?
            connection.query("SELECT*FROM products WHERE product_name=?",
                answer.userChoice, function(err, res){
                    console.log(res);
                    if (res[0].stock_quantity >= parseInt(answer.quantity)) {
                        console.log("does the if work");
                        connection.query("UPDATE products SET ? WHERE ?",
                        {

                        })
                        // price goes here. only executes if enough stock
                        
                    }
                    else {
                        console.log("We don't have that many! SOrry!");
                    }

                }
            )
            // is chosen item in stock?

        });

    })

};
