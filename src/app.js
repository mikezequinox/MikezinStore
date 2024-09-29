import express from 'express'
import productRoutes from './app/routes/productRoutes.js'

const app = express()

app.use(express.json())
app.use(productRoutes)

export default app





