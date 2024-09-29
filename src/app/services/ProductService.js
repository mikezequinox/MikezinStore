import ProductRepository from "../repositories/ProductRepository.js"

class ProductService
{
    async createProduct(newProduct)
    {
        const REQUIRED_PROPS = ['id','price','name','stock','description']
        var hasAllProperties = REQUIRED_PROPS.every(prop => prop in newProduct)

        if(!hasAllProperties)
            return "Can't add a new product, because: missing necessary properties"

        if(Object.keys(newProduct).length != REQUIRED_PROPS.length)
            return "Can't add a new product, because: unnecessary properties in the request"

        if(typeof newProduct.id !== 'string' )
            return "the ID field type must be a string"

        if(newProduct.id.length > 5)
            return "the ID field must have characters less than or equal to 5"

        if(typeof newProduct.name !== 'string')
            return "the NAME field type must be a string"

         if(newProduct.name.length > 10)
         {
            newProduct.name = newProduct.name.substring(0,10)
            console.log("The argument to NAME is too long(>10). The value will be truncated")
         }

        if(typeof newProduct.description !== 'string')
            return "the DESCRIPTION field type must be a string"

        if(newProduct.description.length > 30)
        {
            newProduct.name = newProduct.name.substring(0,30)
            console.log("The argument to DESCRIPTION is too long(>30). The value will be truncated")
        }

        if(typeof newProduct.price !== 'number')
            return "the PRICE field type must be a number"

        if(newProduct.price < 0)
            return "the PRICE field type can't have a negative value"

        if(typeof newProduct.stock !== 'number')
            return "the STOCK field type must be a number"

        if(!Number.isInteger(newProduct.price))
            return "the STOCK field type must be a integer value"

        if(newProduct.stock < 0)
            return "the STOCK field type can't have a negative value"

        return await ProductRepository.create(newProduct) 
    }

    async findProduct(id)
    {
        if(typeof id !== 'string')
            return "The argument 'id' must be of type string"

        var result = await ProductRepository.find(id)
        if(!result)
            return "Cannot find the product of the id:" + id

        return result
    }

    async deleteProduct(id)
    {
        if(typeof id !== 'string')
            return "The argument 'id' must be of type string"
        
        var result = await ProductRepository.delete(id)

        return result
    }

    async updateProduct(productUpdated)
    {
        if(typeof productUpdated.id !== 'string')
            return "The argument 'id' must be of type string"

        return await ProductRepository.update(productUpdated)
    }
}

export default new ProductService()
