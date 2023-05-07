const express       = require('express');
//const bodyParser    = require('body-parser');
const app           = express();
const cors          = require('cors');

const settings      = require('./src/config');

// middlewares
app.use(express.json());
app.use(cors());

//routes
const salasRoutes       = require('./src/routes/salasRoutes');
const reservasRoutes    = require('./src/routes/reservasRoutes');

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
}).listen(settings.PORT,()=>{console.log("Servidor en puerto ", settings.PORT)});