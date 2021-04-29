/* Replace with your SQL commands */
CREATE TABLE orders
(
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    quantity INTEGER ,
    product_id INTEGER REFERENCES products(id),
    user_id integer REFERENCES users(id)
);