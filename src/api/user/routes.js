import express from "express"
import UserController from './Controller.js';

export function initUserRoutes()
{
    const Router = express.Router()

    Router.post(`/`, (req, res) => {
        UserController.createUser(req,res)
    })

    Router.get(`/:email`, (req,res) => {
        UserController.findUser(req,res)
    })

    Router.delete(`/:email`, (req,res) => {
        UserController.deleteUser(req,res)
    })

    Router.put(`/`, (req,res) => {
        UserController.updateUser(req,res)
    })

    return Router
}