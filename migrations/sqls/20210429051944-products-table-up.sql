/* Replace with your SQL commands */
CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    price integer,
    category varchar,
    user_id integer REFERENCES users(id)
);