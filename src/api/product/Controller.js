import ProductService from "./Service.js"

class ProductController
{
    async createProduct(req, res)
    {
        if(!req || Object.keys(req.body).length === 0)
            return res.status(400).json('Undefined request: cannot send a null or empty request')
        
        var result = await ProductService.createProduct(req.body)
    
        if(!result)
            return res.status(400).json('Product not added')
            
        return res.json(result)
    }

    async findProduct(req,res)
    {
        const ID = req.params.id

        var result = await ProductService.findProduct(ID)

        if(!result)
            return res.status(400).json('Product not found')

        return res.json(result)
    }

    async deleteProduct(req,res)
    {
        const ID = req.params.id

        var result = await ProductService.deleteProduct(ID)

        if(!result)
            return res.status(400).json('Product not deleted')
            
        return res.json(result)
    }

    async updateProduct(req,res)
    {
        if(!req || Object.keys(req.body).length === 0)
            return res.status(400).json('Undefined request: cant send a null or empty request')
        
        const productUpdated = req.body
           
        var result = await ProductService.updateProduct(productUpdated)

        if(!result)
            return res.status(400).json('Product not updated')

        return res.json(result)
    }
}

export default new ProductController()
