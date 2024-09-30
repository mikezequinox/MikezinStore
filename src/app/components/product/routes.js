import express from "express"
import ProductController from './Controller.js'

export function initProductRoutes()
{   
    const Router = express.Router()

    Router.post(`/`, (req, res) => {
        ProductController.createProduct(req,res);
    })

    Router.get(`/:id`, (req,res) => {
        ProductController.findProduct(req,res)
    })

    Router.delete(`/:id`, (req,res) => {
        ProductController.deleteProduct(req,res)
    })

    Router.put(`/`, (req,res) => {
        ProductController.updateProduct(req,res)
    })

    return Router
}
