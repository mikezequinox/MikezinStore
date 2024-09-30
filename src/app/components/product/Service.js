import ProductRepository from "./Repository.js"
import StringUtils from "../utils/StringUtils.js"

class ProductService
{
    async createProduct(newProduct)
    {
        const REQUIRED_PROPS = ['id','price','name','stock','description']
        var hasAllProperties = REQUIRED_PROPS.every(prop => prop in newProduct)

        if(!hasAllProperties)
        {   
            console.log('Cant add a new product, because: missing necessary properties')
            return null
        }
            
        if(Object.keys(newProduct).length !== REQUIRED_PROPS.length)
        {
            console.log('Cant add a new product, because: unnecessary properties in the request') 
            return null
        }
            
        if(typeof newProduct.id !== 'string')
        {
            console.log('Cant add a new product, because: the ID field type must be a string') 
            return null
        }

        if(!StringUtils.isValidLength(newProduct.id,5))
        {
            console.log('Cant add a new product, because:the ID field must have number of characters <= to 5') 
            return null
        }

        if(typeof newProduct.name !== 'string')
        {
            console.log('Cant add a new product, because:the NAME field must be a string')
            return null
        }

        if(!StringUtils.isValidLength(newProduct.name,10))
        {
            newProduct.name = newProduct.name.substring(0,10)
            console.log('The NAME FIELD is too long(>10). The value will be truncated')
        }

        if(typeof newProduct.description !== 'string')
        {
            console.log('Cant add a new product, because:the DESCRIPTION field must be a string')
            return null
        }

        if(!StringUtils.isValidLength(newProduct.description,30))
        {
            newProduct.description = newProduct.description.substring(0,30)
            console.log('The argument to DESCRIPTION is too long(>30). The value will be truncated')
        }

        if(typeof newProduct.price !== 'number')
        {
            console.log('Cant add a new product, because:the PRICE field must be a number')
            return null
        }
        
        if(newProduct.price < 0)
        {
            console.log('Cant add a new product, because:the PRICE field cannot have a negative value')
            return null
        }
            
        if((typeof newProduct.stock !== 'number') || (!Number.isInteger(newProduct.stock)))
        {
            console.log('Cant add a new product, because:the STOCK FIELD must be a integer number')
            return null
        }

        if(newProduct.stock < 0)
        {
            console.log('Cant add a new product, because:the STOCK field cannot have a negative value')
            return null
        }

        return await ProductRepository.create(newProduct) 
    }

    async findProduct(id)
    {
        if(typeof id !== 'string')
        {   
            console.log('The argument ID must be of type string')
            return null
        }

        return await ProductRepository.find(id)
    }

    async deleteProduct(id)
    {
        if(typeof id !== 'string')
        {
            console.log('The argument ID must be of type string')
            return null
        }
            
        return await ProductRepository.delete(id)
    }

    async updateProduct(productUpdated)
    {
        if(typeof productUpdated.id !== 'string')
        {   
            console.log('The ID field must be of type string')
            return null
        }

        if(productUpdated.id ==='')
        {   
            console.log('The ID field cannot be empty')
            return null
        }

            
        return await ProductRepository.update(productUpdated)
    }
}

export default new ProductService()
