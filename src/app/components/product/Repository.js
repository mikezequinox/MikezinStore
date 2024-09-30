import QUERY from './database/productDatabase.js'

class ProductRepository
{
    async create(newProduct)
    {
        const INSERT = 'INSERT into produtos.registrados SET ?;'

        var exist = this.find(newProduct.id)

        if(!exist)
        {
            console.log('Cannot add this product, there is another already registered with that same id: '+ newProduct.id)
            return null
        }

        try{
            var result = await QUERY(INSERT, newProduct)
        }catch(error)
        {
            console.log('An unexpected error occurred while inserting the product into the database.')
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
            console.log('An unexpected error occurred while searching the product in the database.')
            return null
        }
        
        if(Object.keys(result).length === 0)
        {
            console.log('Cannot find the product of the id:' + id)
            return null
        }

        return result 
    }

    async update(productUpdated)
    {
        var exist = await this.find(productUpdated.id)

        if(!exist)
            return null
            
        const UPDATE = 'UPDATE produtos.registrados SET ? WHERE id=?'

        try{
            var result = await QUERY(UPDATE, [productUpdated, productUpdated.id])
        }catch(error)
        {   
            console.log('An unexpected error occurred while deleting the product in the database.')
            return null 
        }

        return result
    }

    async delete(id)
    {
        var exist = await this.find(id)

        if(!exist)
             return null
            
        const DELETE = 'DELETE FROM produtos.registrados WHERE id=?;'

        try{
            var result = await QUERY(DELETE, id)
        }catch(error)
        {
            console.log('An unexpected error occurred while deleting the product in the database.')
            return null 
        }

        return result
    }
}

export default new ProductRepository()
