CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    order_date TIMESTAMP NOT NULL,
    total_price NUMERIC(10,2) NOT NULL,
    order_status VARCHAR(100) NOT NULL
);

-- Create orderitems table
CREATE TABLE IF NOT EXISTS orderitems (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id), 
    product_id VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL,
    total_price NUMERIC(10,2) NOT NULL
);