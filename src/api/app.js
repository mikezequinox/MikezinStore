import express from 'express'
import { initProductRoutes } from './product/routes.js'
import logger from '../config/logger.js';

const app = express()

app.use(express.json())//config

app.use((err, req, res, next) => {
    if ((err instanceof SyntaxError) && (err.status === 400) && ('body' in err))
        return res.status(400).json({ error: "JSON de entrada inválido" });

    next();
});

app.use(`/product/`, initProductRoutes())//start routes

app.use((req, res) => {
    res.status(404).json('error: Rota não encontrada');//error handler
});

export default app
