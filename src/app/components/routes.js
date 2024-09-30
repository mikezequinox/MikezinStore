import { initProductRoutes } from "./product/routes.js"
import express from 'express'

const app = express()

app.use(express.json())
app.use(`/product/`, initProductRoutes())

export default app
