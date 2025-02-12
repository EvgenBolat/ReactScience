import { Server } from 'socket.io'

export const assignMessagesToSocket = (socketServer: Server) => {
  socketServer.on('connection', (socket) => {
    socket.on('sendMessage', (message: any) => {
      socketServer.emit('message', socket.id + ': ' + message)
    })
  })
}