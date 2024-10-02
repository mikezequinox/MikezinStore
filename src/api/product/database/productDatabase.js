import mysql from 'mysql2/promise'

const CONNECTION = mysql.createPool({
    host:'localhost',
    port:'3306',
    user: 'root',
    password: 'mikeequinox',
    database: 'produtos',
    waitForConnections    : true,
    connectionLimit       : 10,
    maxIdle               : 10,
    idleTimeout           : 60000, 
    queueLimit            : 10,
    enableKeepAlive       : true,
    keepAliveInitialDelay : 0,
})

export const QUERY = async(sqlInstruction, value = '') =>{
    try{
        var [result] = await CONNECTION.query(sqlInstruction, value)
    }catch(error){
        logger.info(error)
        throw new Error('Error while doing the query')
    }
    return result
}

export default QUERY
