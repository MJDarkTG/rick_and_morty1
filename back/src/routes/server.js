const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors')
const router = require('./index.js')

// middleware para poder traer info del body 
app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(PORT, ()=> console.log('has being created a sever in the port 3001'))






// const { access } = require("fs");
// const http = require("http");
// const data = require("../utils/data.js");


// http.createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("rickandmorty/character")) {
//         let id = req.url.split("/");
//         id = id[id.length - 1]
//         let user = data.find(char => char.id === id);
//         res.writeHead(200, { "Content-Type": "application/json" })
//         res.end(user)
//     }
// }).listen(3001, () => {
//     console.log("server levantado");
// })

// http.createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("rickandmorty/character")) {
//         let id = req.url.split("/").at(-1);
//         let character = data.find(char => char.id === Number(id))
//         res.writeHead(200, { "Content-Type": "application/json" })
//         res.end(JSON.stringify(character))
//     }
// }

// ).listen(3001, () => {
//     console.log("server levantado");
// })

//CORS  Cross Origin Resourses
// .com .co soyhenry.com 
