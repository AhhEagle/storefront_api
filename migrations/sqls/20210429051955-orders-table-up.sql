/* Replace with your SQL commands */
 CREATE TABLE orders
(
    id SERIAL PRIMARY KEY NOT NULL,
    status VARCHAR(15) NOT NULL,
    user_id INTEGER NOT NULL, 

	FOREIGN KEY (user_id) REFERENCES users(id)
);