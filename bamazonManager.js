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
})

function managerOptions() {
    connection.query("SELECT*FROM products", 
    function(err, res) {
        if (err) throw err;

        inquirer.prompt([
            // manager's options
            {
            name: "managerOptions",
            type: "list",
            message: ["[VIEW] Products for Sale", " View [LOW] Inventory", " [ADD] to Inventory", " Add [NEW] Product"],
            choices: ["VIEW", "LOW", "ADD", "NEW"]
            }
            ])
            .then(function(answer) {
                console.log(answer);
                if (answer.managerOptions.toUpperCase() === "VIEW") {
                    viewProducts();
                }
                if (answer.managerOptions.toUpperCase() === "ADD") {
                    addNewProduct();
                }
            })
    })
};
// end managerOptions();

// viewProducts();
function viewProducts() {
    connection.query("SELECT*FROM products",
        function(err, res) {
            if (err) throw err;
            console.log(res);
        });
};
// end viewProducts();



function addNewProduct() {
    console.log("Insert new product");
    connection.query("INSERT INTO products SET ?",
        {
            product_name: "Unicorns",
            department_name: "Mythical Creatures",
            price: 10000.00,
            stock_quantity: 1
        },
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " Product Added!");
            updateProducts();
        }
    );
};
// // end addNewProduct();

function updateProducts() {
    connection.query("UPDATE products SET ? WHERE ?",
    [
        {product_name: "Unicorns"},
        {department_name: "Mythical Creatures"},
        {price: 1000000.00},
        {stock_quantity: 1}
    ],
    function(err, res) {
        connection.query("SELECT product_name FROM products",
        function(err, res){
            console.log(res)
        });
    }
    )
};
// end updateProduct();



// connection.end();