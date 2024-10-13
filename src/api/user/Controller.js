import UserService from "./Service.js"

class UserController
{
    async createUser(req,res)
    {
        if(!req || Object.keys(req.body).length === 0)
            return res.status(400).json('Undefined request: cannot send a null or empty request')

        var result = await UserService.createUser(req.body)

        res.json(result)
    }

    async findUser(req,res)
    {
        const email = req.params.email

        var result = await UserService.findUser(email) 

        if(!result)
            return res.status(400).json('usuario nao encontrado')

        res.status(200).json(result)
    }

    async updateUser(req,res)
    {
        if(!req || Object.keys(req.body).length === 0)
            return res.status(400).json('Undefined request: cannot send a null or empty request')

        const userUpdated = req.body

        var result = await UserService.updateUser(userUpdated)

        res.status(200).json(result)
    }

    async deleteUser(req,res)
    {
        const email = req.params.email

        var result = await UserService.deleteUser(email)

        if(!result)
            return res.status(400).json('usuario nao deletado')

        res.status(200).json(result)
    }
}

export default new UserController()