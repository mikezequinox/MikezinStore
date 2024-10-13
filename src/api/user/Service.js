import UserRepository from './Repository.js'
import StringUtils from '../utils/StringUtils.js'
import logger from '../../config/logger.js';

class UserService
{
    async createUser(newUser)
    {
        const REQUIRED_KEYS = ['email','name','password','role']
        var hasAllKeys = REQUIRED_KEYS.every(key => key in newUser)

        if(!hasAllKeys)
        {   
            logger.info('Cant add a new user, because: missing necessary keys in the user object')
            return null
        }
           
        if(Object.keys(newUser).length !== REQUIRED_KEYS.length)
        {
            logger.info('Cant add a new user, because: invalid keys in the user object') 
            return null
        }

        if(!newUser.name)
        {
            logger.info('Cant add a new user, because: the NAME field cant be empty')
            return null
        }

        if(!StringUtils.isValidLength(newUser.name,15))
        {
            logger.info('The argument length to NAME is too long(>15). The value will be truncated')
            newUser.name = newUser.name.substring(0,15)
        }

        if(!newUser.role)
        {
            logger.info('Cant add a new user, because: the ROLE field cant be empty')
            return null
        }

        if(!StringUtils.isValidLength(newUser.role,15))
        {
            logger.info('The argument length to ROLE is too long(>15). The value will be truncated')
            newUser.role = newUser.role.substring(0,15)
        }

        if(!newUser.email)
        {
            logger.info('Cant add a new user, because: the ROLE field cant be empty')
            return null
        }

        if(!StringUtils.isValidLength(newUser.email,30))
        {
            logger.info('The argument length to EMAIL is too long(>30). Will not be accepted')
            return null
        }

        if(!newUser.password)
        {
            logger.info('Cant add a new user, because: the PASSWORD field cant be empty')
            return null
        }

        if(!StringUtils.isValidLength(newUser.password,30))
        {
            logger.info('The argument length to PASSWORD is too long(>30). Will not be accepted')
            return null
        }

        return await UserRepository.create(newUser)
    }

    async findUser(email)
    {
        if(!email)
        {
            logger.info('Cant find the user, because: the EMAIL field cant be empty')
            return null
        }

        email = String(email)
        
        return await UserRepository.find(email)
    }

    async updateUser(userUpdated)
    {
        if(!userUpdated.email)
        {
            logger.info('Cant update the user, because: the EMAIL field cant be empty')
            return null
        }

        userUpdated.email = String(userUpdated.email)

        const VALID_KEYS = ['email','name','password','role']
        const hasInvalidKey = Object.keys(userUpdated).some(key => !VALID_KEYS.includes(key))
        
        if(hasInvalidKey)
        {
            logger.info('Cant update a user, because: invalid keys in the user object') 
            return null
        }

        return await UserRepository.update(userUpdated)
    }

    async deleteUser(email)
    {
        if(!email)
        {
            logger.info('Cant delete the user, because: the EMAIL field cant be empty')
            return null
        }
    
        email = String(email)

        return await UserRepository.delete(email)
    }
}

export default new UserService()