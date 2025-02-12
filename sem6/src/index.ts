import express from 'express'
import { Server } from 'socket.io'
import postsController from './routes/posts'
import { assignMessagesToSocket } from './routes/socket'

const app = express()

const port = 3000

app.use(express.json())

app.use('/posts', postsController)

const serverHttp = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

const server = new Server(serverHttp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

assignMessagesToSocket(server)
