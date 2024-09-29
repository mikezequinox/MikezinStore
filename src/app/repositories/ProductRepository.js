import QUERY from "../../database/productConnection.js"

class ProductRepository
{
    async create(newProduct)
    {
        const INSERT = "INSERT into produtos.registrados SET ?;"

        var alreadyExist = this.find(newProduct.id)

        if(!alreadyExist)
            return "Cannot add this product, there is another already registered with that same id: " + newProduct.id

        try{
            var result = await QUERY(INSERT, newProduct)
        }catch(error)
        {
            return "An unexpected error occurred while inserting the product into the database."
        }

        return result
    }

    async find(id)
    {
        const SELECT = "SELECT * FROM produtos.registrados WHERE id=?;"
         
        try{
            var result = await QUERY(SELECT, id)
        }catch(error)
        {
            return "An unexpected error occurred while searching the product in the database." 
        }
        
        if(Object.keys(result).length === 0)
        {
            console.log("Cannot find the product of the id:" + id)
            return null
        }

        return result 
    }

    async update(productUpdated)
    {
        var alreadyExist = this.find(productUpdated.id)

        if(!alreadyExist)
            return "Cannot find this product of the id:" + productUpdated.id

        const UPDATE = "UPDATE produtos.registrados SET ? WHERE id=?"

        try{
            var result = await QUERY(UPDATE, [productUpdated, productUpdated.id])
        }catch(error)
        {
            return "An unexpected error occurred while deleting the product in the database." 
        }

        return "product updated"
    }

    async delete(id)
    {
        var alreadyExist = this.find(id)

        if(!alreadyExist)
            return "Cannot find this product of the id:" + id

        const DELETE = "DELETE FROM produtos.registrados WHERE id=?;"

        try{
            var result = await QUERY(DELETE, id)
        }catch(error)
        {
            return "An unexpected error occurred while deleting the product in the database." 
        }

        return "product deleted"
    }
}

export default new ProductRepository()
