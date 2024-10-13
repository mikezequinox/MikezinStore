import {initProductRoutes} from './product/routes.js'
import { initUserRoutes } from './user/routes.js'
import {registerMiddlewares,errorHandler} from './middlewares/index.js'

export function initAllRoutes(router)
{
    registerMiddlewares(router)

    router.get('/', (req,res) =>{
        res.json('tela inicial')
    })
    router.use('/product', initProductRoutes())
    router.use('/user', initUserRoutes())

    errorHandler(router);
}