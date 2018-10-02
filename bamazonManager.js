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
managerOptions();
});

function managerOptions() {
    connection.query("SELECT*FROM products", 
    function(err, res) {
        if (err) throw err;

        inquirer.prompt([
            // manager's options
            {
            name: "managerOptions",
            type: "list",
            message: "What do you want to do?",
            choices: ["[View Products for Sale]", "[View Low Inventory]", "[Add to Inventory]", "[Add New Product]"]
            }
            .then(function(answer) {
                console.log(answer);
                if (answer.managerOptions === "View Products for Sale") {
                    viewProducts();
                }
                if (answer.managerOptions === "Add New Product") {
                    addNewProduct();
                }
            })
        ])
    })
};
// end managerOptions();

function viewProducts() {
    connection.query("SELECT*FROM products",
    function(err, res) {
        if (err) throw err;
        console.log(res);
    })
};
// end viewProducts();



function addNewProduct() {

};
// end addNewProduct();