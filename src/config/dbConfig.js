import mysql from 'mysql2/promise'
import LOGGER from './logger.js';

function createDBPool(DB_NAME)
{
    const pool = mysql.createPool({
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: DB_NAME,
        waitForConnections    : true,
        connectionLimit       : 10,
        maxIdle               : 10,
        idleTimeout           : 60000, 
        queueLimit            : 10,
        enableKeepAlive       : true,
        keepAliveInitialDelay : 0,
    })

    testConnection(pool,DB_NAME)

    return pool
}

async function testConnection(pool,DB_NAME)
{
    try{
        const CONNECTION = await pool.getConnection()
        CONNECTION.release()
    }catch(error){
         LOGGER.error(`Lost ${DB_NAME} database connection: ${error.message}`)
    }
}


export default createDBPool