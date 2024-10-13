import ProductRepository from "./Repository.js"
import StringUtils from "../utils/StringUtils.js"
import logger from "../../config/logger.js";

class ProductService
{
    async createProduct(newProduct)
    {
        const REQUIRED_KEYS = ['id','price','name','stock','description']
        var hasAllKeys = REQUIRED_KEYS.every(prop => prop in newProduct)

        if(!hasAllKeys)
        {   
            logger.info('Cant add a new product, because: missing necessary keys in the product object')
            return null
        }
            
        if(Object.keys(newProduct).length !== REQUIRED_KEYS.length)
        {
            logger.info('Cant add a new product, because: invalid keys in the product object') 
            return null
        }

        newProduct.id = String(newProduct.id)
        newProduct.name = String(newProduct.name)
        newProduct.description = String(newProduct.description)

        if(!StringUtils.isValidLength(newProduct.id,5))
        {
            logger.info('Cant add a new product, because:the ID field must have number of characters <= to 5') 
            return null
        }

        if(!StringUtils.isValidLength(newProduct.name,10))
        {
            newProduct.name = newProduct.name.substring(0,10)
            logger.info('The NAME field is too long(>10). The value will be truncated')
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
        if(!id)
        {
            logger.info('Cant find the product, because: the ID field cant be empty.')
            return null
        }

        id = String(id)
        
        return await ProductRepository.find(id)
    }

    async deleteProduct(id)
    {
        if(!id)
        {
            logger.info('Cant delete the product, because: the ID field cant be empty.')
            return null
        }

        id = String(id)
   
        return await ProductRepository.delete(id)
    }

    async updateProduct(productUpdated)
    {
        if(!productUpdated.id)
        {   
            logger.info('Cant update the product, because: The ID field cannot be empty')
            return null
        }

        productUpdated.id = String(productUpdated.id)

        const VALID_KEYS = ['id','price','name','stock','description']
        const hasInvalidKey = Object.keys(productUpdated).some(key => !VALID_KEYS.includes(key))
        
        if(hasInvalidKey)
        {
            logger.info('Cant update a product, because: invalid keys in the product object') 
            return null
        }

        return await ProductRepository.update(productUpdated)
    }
}

export default new ProductService()
