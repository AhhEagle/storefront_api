/* Replace with your SQL commands */
 CREATE TABLE orders
(
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    quantity INTEGER ,
    product_id INTEGER, 
    user_id INTEGER, 
	FOREIGN KEY (product_id) REFERENCES products(id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);