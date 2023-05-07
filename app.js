import express from 'express';
//const express       = require('express');
//const bodyParser    = require('body-parser');
const app           = express();
import cors from 'cors';
//const cors          = require('cors');


import { PORT } from './src/config.js';

// middlewares
app.use(express.json());
app.use(cors());

//routes
//const salasRoutes       = require('./src/routes/salasRoutes');
import salasRoutes from './src/routes/salasRoutes.js';
//const reservasRoutes    = require('./src/routes/reservasRoutes');
import reservasRoutes from './src/routes/reservasRoutes.js';

app.use(salasRoutes);
app.use(reservasRoutes);

//base de datos
const conn = require('./src/conexion');
/*
conn.connect((err, res)=>{
    if(err){
        console.log(err);
        console.log('Error de conexion con sql');
        return;
    }else{
        console.log("Conexion a base de datos");
    }
});
*/

app.get('/', (req, res)=>{
    res.send('Servidor iniciado');
}).listen(PORT,()=>{console.log("Servidor en puerto ", PORT)});