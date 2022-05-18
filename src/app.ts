import express from 'express'
import socketIo from 'socket.io'
import http from 'http'
import path from 'path'
import bodyParser from 'body-parser'
import request from  'request'

const app = express()
const server = http.createServer(app)
const io = socketIo.Server
const socket = new io(server)
const port = 3000

app.use('/public',express.static(path.join(__dirname,"../public")))
app.set('views','src/views')
app.set('view engine' , 'ejs' );
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.render('index')
})

server.listen(8000,() => {
    console.clear()
    console.log('rodando em http://localhost:8000')
})

function requestData(){
	request.post("http://localhost:5000/api/response/show-data",(err: any,statusCode: any,data:any ) => {
    	console.log(data)
    })
}

socket.on('connection', (client) => {
    console.log(`new connection ${client.id}`)
    client.on('message',(resp) => {
        console.log(resp.msg)
    })
})