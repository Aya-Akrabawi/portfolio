'use strict';
const express = require('express');
// const { response } = require('express');
const server = express();
const PORT = process.env.PORT || 3000;


server.listen(PORT,()=>{
console.log(`hello ${PORT}`);
})

server.get('/hii',(request , respond)=>{
    respond.send('hii you are live now!')
})

server.use(express.static('./public'));
