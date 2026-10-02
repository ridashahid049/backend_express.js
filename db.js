import { Pool } from "pg";

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "crud_db",
    password : "09@12rida",
    port : 5432,
})

export default pool;