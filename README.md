## Irene's Animal House
aka, bamazon

Requirements: pull the project repo and do "npm install"
Dependencies: mysql, inquirer

This is a command-line project created for the fall 2018 full-stack web development class at George Washington University. 

It is an Amazon-type store, where the customer requests a product, and the store sells it if it's in stock. 

I have attached screenshots of the transaction in progress.
(bamazonCustomer.js)

This is the store's inventory when fully stocked. 
![Image of bamazonDB](./images/1_bamazonDB.png)

When the customer enters the store, they are asked to choose their item. 
![Image of initial prompt](./images/2_bamazon_initialPrompt.png)

The sales associate asks how many of the items the customer would like. They then check the inventory to confirm there are enough of the items to fulfill the order.
![Image of customerExchange](./images/3_bamazon_customerExchange.png)

In this example, I show what happens when a series of customers deplete an item's inventory. 
![Image of outOfStock](./images/4_bamazon_outOfStock.png)
