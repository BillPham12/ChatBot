const express = require('express')
const app = express()
const port = 3000
var server = require('http').Server(app);
var io = require('socket.io')
var client = 0
var fs = require('fs')
app.use(express.static(__dirname));

// redirect to main page
app.get("/",(req,res) =>{
res.sendFile(__dirname + '/main.html')})
// listen to port 3000
server.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})
users = [];
const socketIO = io(server)
// connect to client
socketIO.on('connection', (socket) =>{
  socketIO.sockets.emit('clients',{list:users,data:client})
  client += 1
  console.log('a user connected')
  // set user name
  socket.on('setUserName', function(data){
    if (users.indexOf(data) > -1){
      socket.emit('the username you given has been taken by somebody else! Try another one')
    }
    else{
      // adding user to user array
      users.push([data,socket.id])
      var destination = __dirname + "/chatroom.html"
      // open local html file then send back to client
      var dataToSend = fs.readFileSync(destination, 'utf8')
      socket.emit("UserSetUpComplete",{list:users, username:data, dest:dataToSend})
    }
    // sending data to other people
    socketIO.sockets.emit('clients',{list:users,data:client})
  })
  // socket on receiving a message
  socket.on('msg',function(data) {
    // sending data to all clients
    socketIO.sockets.emit('newmsg',data)
  })
  // disconnect then updating number of clients
  socket.on('disconnect', ()=>{
    console.log("A user disconnected")
    client -=1
    for (x in users){
      if (users[x][1] ==socket.id){
        var index = users.indexOf(users[x])
        users.splice(index,1)
      }
    }
    // updating number of clients
    socketIO.sockets.emit('clients',{list:users,data:client})
  })
  // updating number of clients
  socketIO.sockets.emit('clients',{list:users,data:client})
})
