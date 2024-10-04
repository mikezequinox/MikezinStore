import ProductRepository from "./Repository.js"
import StringUtils from "../utils/StringUtils.js"
import logger from "../../config/logger.js"

class ProductService
{
    async createProduct(newProduct)
    {
        const REQUIRED_PROPS = ['id','price','name','stock','description']
        var hasAllProperties = REQUIRED_PROPS.every(prop => prop in newProduct)

        if(!hasAllProperties)
        {   
            logger.info('Cant add a new product, because: missing necessary properties')
            return null
        }
            
        if(Object.keys(newProduct).length !== REQUIRED_PROPS.length)
        {
            logger.info('Cant add a new product, because: unnecessary properties in the request') 
            return null
        }
            
        if(typeof newProduct.id !== 'string')
        {
            logger.info('Cant add a new product, because: the ID field type must be a string') 
            return null
        }

        if(!StringUtils.isValidLength(newProduct.id,5))
        {
            logger.info('Cant add a new product, because:the ID field must have number of characters <= to 5') 
            return null
        }

        if(typeof newProduct.name !== 'string')
        {
            logger.info('Cant add a new product, because:the NAME field must be a string')
            return null
        }

        if(!StringUtils.isValidLength(newProduct.name,10))
        {
            newProduct.name = newProduct.name.substring(0,10)
            logger.info('The NAME FIELD is too long(>10). The value will be truncated')
        }

        if(typeof newProduct.description !== 'string')
        {
            logger.info('Cant add a new product, because:the DESCRIPTION field must be a string')
            return null
        }

        if(!StringUtils.isValidLength(newProduct.description,30))
        {
            newProduct.description = newProduct.description.substring(0,30)
            logger.info('The argument to DESCRIPTION is too long(>30). The value will be truncated')
        }

        if(typeof newProduct.price !== 'number')
        {
            logger.info('Cant add a new product, because:the PRICE field must be a number')
            return null
        }
        
        if(newProduct.price < 0)
        {
            logger.info('Cant add a new product, because:the PRICE field cannot have a negative value')
            return null
        }
            
        if((typeof newProduct.stock !== 'number') || (!Number.isInteger(newProduct.stock)))
        {
            logger.info('Cant add a new product, because:the STOCK FIELD must be a integer number')
            return null
        }

        if(newProduct.stock < 0)
        {
            logger.info('Cant add a new product, because:the STOCK field cannot have a negative value')
            return null
        }

        return await ProductRepository.create(newProduct) 
    }

    async findProduct(id)
    {
        if(typeof id !== 'string')
        {   
            logger.info('The argument ID must be of type string')
            return null
        }

        return await ProductRepository.find(id)
    }

    async deleteProduct(id)
    {
        if(typeof id !== 'string')
        {
            logger.info('The argument ID must be of type string')
            return null
        }
            
        return await ProductRepository.delete(id)
    }

    async updateProduct(productUpdated)
    {
        if(typeof productUpdated.id !== 'string')
        {   
            logger.info('The ID field must be of type string')
            return null
        }

        if(productUpdated.id ==='')
        {   
            logger.info('The ID field cannot be empty')
            return null
        }

        return await ProductRepository.update(productUpdated)
    }
}

export default new ProductService()
