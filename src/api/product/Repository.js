import logger from '../../config/logger.js'
import QUERY from './database/productDatabase.js'

class ProductRepository
{
    async create(newProduct)
    {
        const INSERT = 'INSERT into produtos.registrados SET ?;'

        var exist = await this.find(newProduct.id)

        if(exist)
        {
            logger.info(`Cant add a new product, because: there is another product with the id ${newProduct.id}`)
            return null
        }
            
        try{
            var result = await QUERY(INSERT, newProduct)
        }catch(error)
        {
            logger.warn(error.message + '. An unexpected error occurred while inserting the product in the database.')
            return null
        }
    
        return result
    }

    async find(id)
    {
        const SELECT = 'SELECT * FROM produtos.registrados WHERE id=?;'
         
        try{
            var result = await QUERY(SELECT, id)
        }catch(error)
        {
            logger.warn(error.message +`. An unexpected error occurred while searching the product with the id ${id} in the database.`)
            return null
        }
        
        if(Object.keys(result).length === 0)
            return null
            
        return result 
    }

    async update(productUpdated)
    {
        var exist = await this.find(productUpdated.id)

        if(!exist)
        {
            logger.info(`Cant update the product, because: the product with the id ${productUpdated.id} doesn't exist`)
            return null
        }

        const UPDATE = 'UPDATE produtos.registrados SET ? WHERE id=?'

        try{
            var result = await QUERY(UPDATE, [productUpdated, productUpdated.id])
        }catch(error)
        {   
            logger.warn(error.message +'. An unexpected error occurred while updating the product in the database.')
            return null 
        }

        return result
    }

    async delete(id)
    {
        var exist = await this.find(id)

        if(!exist)
        {
            logger.info(`Cant delete the product, because: the product with the id ${id} doesn't exist`)
            return null
        }
            
        const DELETE = 'DELETE FROM produtos.registrados WHERE id=?;'

        try{
            var result = await QUERY(DELETE, id)
        }catch(error){
            logger.warn(error.message + '. An unexpected error occurred while deleting the product of the database.')
            return null 
        }

        return result
    }
}

export default new ProductRepository()
