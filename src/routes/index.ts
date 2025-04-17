import express from 'express'
import webhookRoute from '../api/webhook/routes'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World :D'
  })
})

router.use('/webhook', webhookRoute)

export default router