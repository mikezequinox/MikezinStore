import mysql from 'mysql2'


const PRODUCT_DB_CONNECT = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user: 'root',
    password: 'mikeequinox',
    database: 'produtos'
})

PRODUCT_DB_CONNECT.connect((error) =>{
    if(error)
        console.log(error.message)
    else
        console.log("conectado ao banco de dados")
})

export const QUERY = (sqlInstruction, value = '', rejectMessage) =>{
    return new Promise((resolve, reject) => {
        PRODUCT_DB_CONNECT.query(sqlInstruction, value, (error, result) => {
            if(error)
                return reject(rejectMessage)
            else
            {
                const DATA = JSON.parse(JSON.stringify(result))
                return resolve(DATA)
            }
        })
    })
}

export default QUERY
