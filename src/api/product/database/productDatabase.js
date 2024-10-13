import createDBPool from '../../../config/dbConfig.js'

const productDB = createDBPool(process.env.PRODUCT_DB)

async function QUERY(sqlInstruction, value = '')
{
    try{
        var [result] = await productDB.query(sqlInstruction, value)
    }catch(error){
        throw new Error('Error while doing the query')
    }
    return result
}

export default QUERY