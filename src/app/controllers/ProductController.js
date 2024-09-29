import ProductService from "../services/ProductService.js"

class ProductController
{
    async createProduct(req, res)
    {
        if(!req || Object.keys(req.body).length === 0)
            return res.status(400).json("Undefined request: cannot send a null or empty value")
        
        var newProduct = req.body
        var result = await ProductService.createProduct(newProduct)

        return res.json(result)
    }

    async findProduct(req,res)
    {
        const ID = req.params.id

        if(!ID)
            return res.status(400).json("Undefined request: parameter 'id' missing in the request")

        var result = await ProductService.findProduct(ID)

        return res.json(result)
    }

    async deleteProduct(req,res)
    {
        const ID = req.params.id

        if(!ID)
            return res.status(400).json("Undefined request: parameter 'id' missing in the request")

        var result = await ProductService.deleteProduct(ID)

        return res.json(result)
    }

    async updateProduct(req,res)
    {
        const productUpdated = req.body

        if(!productUpdated)
            return res.status(400).json("Undefined request: parameter 'productUpdated' missing in the request")
        var result = await ProductService.updateProduct(productUpdated)

        return res.json(result)
    }
}

export default new ProductController()
