import {initProductRoutes} from './product/routes.js'
import {registerMiddlewares,errorHandler} from './middlewares/index.js'

export function initAllRoutes(router)
{
    registerMiddlewares(router)

    router.get('/', (req,res) =>{
        res.json('tela inicial')
    })

    router.use('/product/', initProductRoutes())
    errorHandler(router)
}