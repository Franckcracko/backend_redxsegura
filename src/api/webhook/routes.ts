import { verifyWebhook } from "@clerk/express/webhooks"
import { Router } from 'express'
import bodyParser from 'body-parser';

const router = Router()

router.post('/', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const evt = await verifyWebhook(req)

    if (evt.type === 'user.created') {
      console.log('userId:', evt.data.id)
    }

    res.send('Webhook received')
  } catch (err) {
    console.error('Error verifying webhook:', err)
    res.status(400).send('Error verifying webhook')
  }
})

export default router