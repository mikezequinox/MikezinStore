import createDBPool from '../../../config/dbConfig.js'

const productDB = createDBPool(process.env.PRODUCT_DB)

<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
async function QUERY(sqlInstruction, value = '')
>>>>>>> Stashed changes
=======
async function QUERY(sqlInstruction, value = '')
>>>>>>> 6794707fdb8e4cf9774f20c4c54abfc205cbaced
{
    try{
        var [result] = await productDB.query(sqlInstruction, value)
    }catch(error){
        throw new Error('Error while doing the query')
    }
    return result
}

export default QUERY