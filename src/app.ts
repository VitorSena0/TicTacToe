import express from 'express'
import socketIo from 'socket.io'
import http from 'http'
import path from 'path'
import bodyParser from 'body-parser'
import request from  'request'
import Lobby from "./models/Lobby"
import Players from "./models/Player"

const app = express()
const server = http.createServer(app)
const io = socketIo.Server
const socket = new io(server)
const port = 3000
let rooms:any = []

let tempname = " "

app.use('/public',express.static(path.join(__dirname,"../public")))
app.set('views','src/views')
app.set('view engine' , 'ejs' );
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function code(len: number){
    let code = ''
    do{
        code = code + Math.random().toString(36).substr(2)
    }while(code.length < len)
    code = code.substr(0,len)
    return code
}

app.get('/',(req,res) => {
    res.render('index')
})
app.get("/lobbys/:loby",(req,res) => {
    let confirm = true
    rooms.forEach((elem: any,index: any,array: any) => {
        if(elem.code != req.params.loby){
            confirm = true
        } else if(elem.code == req.params.loby){
            if(elem.connections < 2){
                res.render('session',{
                    "Code":req.params.loby,
                    "Name":tempname
                })
                confirm = false
            } else {
                confirm = false
                res.redirect("/")
            }
        } else {
            confirm = false
            res.redirect("/")
        }
    })
    if(confirm){
        res.redirect("/")
    }
    tempname = " "
})
app.post("/lobbys/",(req,res) => {
    let code1 = code(10)
    tempname = req.body.playname
    rooms.push(new Lobby(code1,code1))
    res.redirect("/lobbys/"+code1);
})

app.post("/enterlobby",(req,res) => {
    let confirm2 = true;
    tempname = req.body.Nameplay
    for(let index = 0; index < rooms.length ; index += 1){
        if(req.body.lobbyName == rooms[index].code){
            res.redirect("/lobbys/"+req.body.lobbyName)
            confirm2 = false
            break;
        }        
    }
    if(confirm2){
        res.redirect("/")
    }
})
/*socket.on("connection",(client: any) => {
    let code: any;
    let player: any;
    client.on("code", (resp: any) => {
        code = resp.code
        player = new Players(resp.name,code)
        rooms.forEach((elem: any,index: any,array: any) => {
            if(resp.code == elem){
                console.log(rooms)
                rooms[index].Lobby.connections = rooms[index].connections + 1
                rooms[index].Lobby.players[player.id] = player
                console.log(rooms)
            }
        })
    })
})*/

server.listen(8000,() => {
    console.clear()
    console.log('rodando em http://localhost:8000')
})

socket.on('connection', (client) => {
    let code: any;
    let player: any;
    client.on('message', (resp) => {
        code = resp.code
        player = new Players(resp.name,client.id)
        for(let index = 0; index < rooms.length ; index += 1){
            if(resp.code == rooms[index].code){
                rooms[index].connections = rooms[index].connections + 1
                rooms[index].players[player.id] = player
            }
        }
        console.log(rooms)
    })
    client.on("disconnect",(resp) => {
        for(let index = 0; index < rooms.length ; index += 1){
            if(code == rooms[index].code){
                rooms[index].connections = rooms[index].connections - 1
                delete rooms[index].players[player.id]
            }
        }
        console.log(rooms)
    })
})