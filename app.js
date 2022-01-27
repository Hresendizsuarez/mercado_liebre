const express = require('express');
const path = require("path")

const app =express();

app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/home.html')); 
});

app.get('/register', (req,res) =>{
    res.sendFile((__dirname + '/views/register.html')); 
});

app.get('/login', (req,res) =>{
    res.sendFile((__dirname + '/views/login.html')); 
});


app.use(express.static(path.join(__dirname, './public')));

app.listen(3006,() =>{
    console.log('servidor corriendo')
});
    




