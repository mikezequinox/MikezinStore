import logger from '../../config/logger.js'
import QUERY from './database/userDatabase.js'

class UserRepository
{
    async create(newUser)
    {
        var exist = await this.find(newUser.email)

        if(exist)
        {
            logger.info(`Cant add a new user, because: there is another user with the email ${newUser.email}`)
            return null
        }

        const INSERT = 'INSERT into usuarios.registrados SET ?;'

        try{
            var result = await QUERY(INSERT, newUser)
        }catch(error){
            logger.warn(error.message + '. An unexpected error occurred while inserting the user in the database.')
            return null
        }

        return result
    }

    async find(email)
    {
        const SELECT = 'SELECT * FROM usuarios.registrados WHERE email=?;'

        try{
            var result = await QUERY(SELECT,email)
        }catch(error){
            logger.warn(error.message +`. An unexpected error occurred while searching the user with the email ${email} in the database.`)
            return null
        }

        if(Object.keys(result).length === 0)
            return null

        return result 
    }

    async update(userUpdated)
    {
        var exist = await this.find(userUpdated.email)

        if(!exist)
        {
            logger.info(`Cant update the user, because: the user with the email ${userUpdated.email} doesn't exist`)
            return null
        }

        const UPDATE = 'UPDATE usuarios.registrados SET ? WHERE email=?'

        try{
            var result = await QUERY(UPDATE, [userUpdated, userUpdated.email])
        }catch(error){   
            logger.warn(error.message +'. An unexpected error occurred while updating the user in the database.')
            return null 
        }

        return result
    }

    async delete(email)
    {
        var exist = await this.find(email)

        if(!exist)
        {
            logger.info(`Cant delete the user, because: the user with the email ${email} doesn't exist`)
            return null
        }

        const DELETE = 'DELETE FROM usuarios.registrados WHERE email=?;'

        try{
            var result = await QUERY(DELETE,email)
        }catch(error){
            logger.warn(error.message + '. An unexpected error occurred while deleting the user of the database.')
            return null 
        }

        return result
    }
}

export default new UserRepository()