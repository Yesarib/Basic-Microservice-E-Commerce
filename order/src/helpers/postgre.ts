import { Pool } from 'pg'

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host:"localhost",
    port: 5432,
    database: "order"
})

export default pool;