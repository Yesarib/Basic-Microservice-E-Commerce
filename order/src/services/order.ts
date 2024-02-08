import pool from "../helpers/postgre"


export interface IOrder {
    user_id: string,
    order_date: Date,
    total_price: number,
    order_status: string,
}

export interface IOrderItems {
    order_id: string,
    product_id: string,
    quantity: number,
    unit_price: number,
    total_price: number,
}

const addOrder = async(order:IOrder) => {
    const client = await pool.connect();
    const result = await client.query(
    `INSERT INTO orders (${order.user_id}, ${order.order_date}, ${order.total_price}, ${order.order_status}, ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,    
    [order.user_id, order.order_date, order.total_price, order.order_status]);
    const newOrder = result.rows[0];
    client.release();
    return newOrder;
}

const getOrders = async():Promise<IOrder[]> => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM orders');
    const orders = result.rows;

    return orders;
}

const addOrderItems = async(order:IOrderItems) => {
    const client = await pool.connect();
    const result = await client.query(
    `INSERT INTO orders (${order.order_id}, ${order.product_id}, ${order.quantity}, ${order.unit_price}, ${order.total_price} ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,    
    [order.order_id, order.product_id, order.quantity, order.unit_price, order.total_price]);
    const newOrderItem = result.rows[0];
    client.release();
    return newOrderItem;
}

const getOrderItems = async():Promise<IOrderItems[]> => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM ordersitems');
    const orders = result.rows;

    return orders;
}

const orderService = {
    addOrder,
    getOrders,
    addOrderItems,
    getOrderItems
}

export default orderService;
