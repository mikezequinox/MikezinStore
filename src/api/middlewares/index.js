import express from 'express'

export function registerMiddlewares(router)
{
    router.use(express.json())
}

export function errorHandler(router)
{
    router.use((err, req, res, next) => {
        if ((err instanceof SyntaxError) && (err.status === 400) && ('body' in err))
            return res.status(400).json('error: invalid req body')
    })

    router.use((req,res) => {
        return res.status(404).json('error: cannot find this part')
    })
}


