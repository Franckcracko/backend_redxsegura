import 'dotenv/config'
import express from 'express'
import { clerkClient, clerkMiddleware, getAuth, requireAuth } from '@clerk/express'

const app = express()
const PORT = 3000

app.use(clerkMiddleware())

app.get('/', (req, res) => {
  res.send('Homepage of your server')
})

// Use requireAuth() to protect this route
// If user is not authenticated, requireAuth() will redirect to your frontend's sign-in page
app.get('/protected', requireAuth({ signInUrl: 'http://localhost:5173/sign-in' }), async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  // or you can use `req.auth`
  const { userId } = getAuth(req)

  // Use Clerk's JavaScript Backend SDK to get the user's User object
  const user = await clerkClient.users.getUser(userId)

  res.json({ user })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
