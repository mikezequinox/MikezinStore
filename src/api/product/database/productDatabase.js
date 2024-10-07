import mysql from 'mysql2/promise'
import LOGGER from '../../../config/logger.js';
import dotenv from 'dotenv'

dotenv.config();

const PRODUCT_DB = mysql.createPool({
    host: process.env.PRODUCT_DB_HOST,
    port:process.env.PRODUCT_DB_PORT,
    user: process.env.PRODUCT_DB_USER,
    password: process.env.PRODUCT_DB_PASS,
    database: process.env.PRODUCT_DB,
    waitForConnections    : true,
    connectionLimit       : 10,
    maxIdle               : 10,
    idleTimeout           : 60000, 
    queueLimit            : 10,
    enableKeepAlive       : true,
    keepAliveInitialDelay : 0,
})

async function testConnection()
{
    try{
        const CONNECTION = await PRODUCT_DB.getConnection()
        CONNECTION.release()
    }catch(error){
         LOGGER.error(`Lost product database connection: ${error.message}`)
    }
}
  
testConnection();

export const QUERY = async(sqlInstruction, value = '') =>{
    try{
        var [result] = await PRODUCT_DB.query(sqlInstruction, value)
    }catch(error){
        throw new Error('Error while doing the query')
    }
    return result
}

export default QUERY
