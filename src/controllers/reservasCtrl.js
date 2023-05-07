const conn = require('../conexion');

const controlador = {
    getReservas: (callback) =>{
        conn.query('SELECT res.*, sal.Nombre Nombre_sala from reservas res, salas sal WHERE sal.Id = res.Sala;', (err, data)=>{
            if(err){
                callback(err);
            }
            callback(data);
        });
    },
    setReserva: (body, callback) =>{
        conn.query('Insert INTO Reservas (Sala, Encargado, Hra_ini, Hra_fin, Estado) VALUES (?,?,?,?,?);', 
            [body.Sala, body.Encargado, body.Hra_ini, body.Hra_fin, body.Estado], (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    },
    getReservasSala: (sala, callback) =>{
        conn.query('Select * From Reservas WHERE Sala = ? ORDER BY time(Hra_ini);', [sala], (err, data)=>{
            if(err){
                callback(err); 
            }
            callback(data);
        });
    },
    deleteReserva: (id, callback) =>{
        conn.query('DELETE FROM reservas WHERE Id = ?;', [id], (err, data) => {
            if (err) {
                callback(callback);
            }
            callback(data);
        });
    },
    updateStatus: (id, body, callback) =>{
        conn.query('UPDATE Reservas SET Estado = ? WHERE Id = ?;', [body.Estado, id], (err, results) => {
            if (err) {
                callback(err);
            }
            callback(results);
        });
    }
}

module.exports = controlador;