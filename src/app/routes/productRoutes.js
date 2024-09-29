import express from "express"
import ProductController from "../controllers/ProductController.js"

const router = express.Router()

const prefix = 'product'

router.post(`/${prefix}/`, (req, res) => {
    ProductController.createProduct(req,res);
})

router.get(`/${prefix}/:id`, (req,res) => {
    ProductController.findProduct(req,res)
})

router.delete(`/${prefix}/:id`, (req,res) => {
    ProductController.deleteProduct(req,res)
})

router.put(`/${prefix}/`, (req,res) => {
    ProductController.updateProduct(req,res)
})

export default router