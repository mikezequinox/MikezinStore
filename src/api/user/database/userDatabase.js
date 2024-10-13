import createDBPool from '../../../config/dbConfig.js';

const userDB = createDBPool(process.env.USER_DB)

async function QUERY(sqlInstruction, value = '')
{
    try{
        var [result] = await userDB.query(sqlInstruction, value)
    }catch(error){
        throw new Error('Error while doing the query')
    }
    return result
}

export default QUERY
