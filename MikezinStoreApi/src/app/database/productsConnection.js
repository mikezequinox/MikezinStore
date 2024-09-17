import mysql from 'mysql2'

const PRODUCT_DB_CONNECT = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user: 'root',
    password: '72894387tor!',
    database: 'produtos'
})

PRODUCT_DB_CONNECT.connect()

export const QUERY = (sqlInstruction, value = '', rejectMessage) =>{
    return new Promise((resolve, reject) => {
        PRODUCT_DB_CONNECT.query(sqlInstruction, value, (error, result) => {
            if(error)
                return reject(rejectMessage)
            else
            {
                const PRODUCT_DATA = JSON.parse(JSON.stringify(result))
                return resolve(PRODUCT_DATA)
            }
        })
    })
}

export default QUERY
