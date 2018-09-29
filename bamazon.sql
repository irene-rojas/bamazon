DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
	id INT(2) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(3) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calico Cat", "Cats", 100.00, 10), ("Black Cat", "Cats", 110.00, 10), ("Siamese Cat", "Cats", 120.00, 10), ("Husky", "Dogs", 150.00, 10), ("Retriever", "Dogs", 100.00, 10), 
("Jack Russell Terrier", "Dogs", 75.00, 10), ("Piranha", "Fish", 50.00, 10), ("Goldfish", "Fish", 10.00, 10), ("Beta Fish", "Fish", 25.00, 10);       