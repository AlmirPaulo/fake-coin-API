const express = require('express')
const app = express()
const port = 7000

let pool = 1000


app.get('/', (req, res)=>{
    res.send({"ping":"pong"})
})    

app.get('/check', (req, res)=>{
    res.send({"pool":pool})
})    

app.get('/buy/:x', (req, res)=>{
    pool = pool+parseInt(req.params.x)
    res.send(`You bough ${req.params.x} fake coins`)
})    

app.get('/sell/:x', (req, res)=>{
    pool = pool-parseInt(req.params.x)
    res.send(`You sell ${req.params.x} fake coins`)
})    

app.get('/rating', (req, res)=>{
    res.send({rating:Math.random()*10+1})
})    

app.listen(port, ()=>{
    console.log(`Server up on localhost, port: ${port}`)
})
