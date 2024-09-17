import express from 'express'
import ProductController from './app/controllers/ProductControllers.js'

const app = express()

app.use(express.json())

app.get('/ambiguard/produtos/', ProductController.index)
app.get('/ambiguard/produtos/:codigo', ProductController.show)
app.post('/ambiguard/produtos', ProductController.store)
app.delete('/ambiguard/produtos/:codigo', ProductController.delete)
app.put('/ambiguard/produtos/:codigo', ProductController.update)

export default app
