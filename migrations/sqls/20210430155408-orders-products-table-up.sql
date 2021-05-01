/* Replace with your SQL commands */
CREATE TABLE order_products (
    id SERIAL PRIMARY KEY NOT NULL,
    quantity INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    order_id INTEGER NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

