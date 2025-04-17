import dotenv from 'dotenv';

dotenv.config();

import app from './app'

import { PORT } from './configs'

try {
  app.listen(PORT, () => {
    console.log(`The server is ready on the port ${PORT}`)
  })
} catch (error) {
  console.log(error)
}