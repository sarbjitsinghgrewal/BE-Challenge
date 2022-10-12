
Pre-Requisites:  System should these application.
-	Node.js
-	MongoDB with MongoCompass
-	Typescript
-	IDE eg. Visual Studio Code
-	Postman or any API testing application
Check below for the postman collection.

Please follow the following steps to setup the server.
-	Open the project in any ide of your choice.
-	Go to the directory that contain the package.json and run npm install in the terminal.
-	After the installation, Run “ npm run dev” in the terminal to start the server. 
-	Once the server has started, a Database with the name of BEChallenge will be created 10 Product will be automatically added to Product collection in mongoDB.

Basic feature of the application:
-	Product will be automatically added.
-	Add the product to cart
-	Update the cart
-	Add multiple product to cart
-	Proceed To checkout which will add the payment detail of the user
-	Change Stock
Add Product to cart: 
-	Copy id from product collection the database and paste it in the body in the postman collection.
o	Eg {
o	    "productId": "63452ea8eb030e9da65937ff", 
o	    "quantity": 19
o	}
To update the cart: Add more products or update the same product
-	Copy the cart id and id of the product that you want to update.
o	{
o	    "_id": "63452ea8eb030e9da65937f9",
o	    "productId": "63452ea8eb030e9da65937f9", 
o	    "quantity": 3
o	}
o	
Add multiple products to cart: 
-	Copy a different product ID with the same cart id.

Proceed To checkout which will add the payment detail of the user:
-	Copy the cartId and fill in the card Detail. We can wither input fail or success in the status field. “Fail” will not proceed with the checkout.  Payment detail will be save in the database if the payment is successful.
o	Eg: {
o	    "cartId": "63453c3fafe832c8dc2a16fc",
o	    "cardNo": 877612341243,
o	    "expiryDate": "23/06/2023",
o	    "CVCNo": 123,
o	    "status": "success"
o	}
Change Stock: After the purchase is complete the product stock will change accordingly. 
Order Detail: After Purchase Order. Check from database.
