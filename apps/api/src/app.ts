import express from 'express'
import { router } from './routes/index.js'

const app = express()

app.use(express.json())
app.get('/health', (_, res) => {
  res.status(200).json({ status: 'ok', version: '0.1.0', service: 'farmledge-api' })
})
app.use(router)

export default app
