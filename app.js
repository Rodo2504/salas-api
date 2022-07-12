const express       = require('express');
//const bodyParser    = require('body-parser');
const app           = express();
const cors          = require('cors');

// settings
const port = process.env.PORT || 3000;

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

conn.connect((err, res)=>{
    if(err){
        console.log(err);
        console.log('Error de conexion con sql');
        return;
    }else{
        console.log("Conexion a base de datos");
    }
});

app.get('/', (req, res)=>{
    res.send('Servidor iniciado');
}).listen(port,()=>{console.log("Servidor en puerto ", port)});