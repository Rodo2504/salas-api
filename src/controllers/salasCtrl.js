//const conn = require('../conexion');
import conn from '../conexion';

const controlador = {
    getSalas: (callback) =>{
        conn.query('Select * From Salas;', (err, data)=>{
            if(err){
                callback(err);
            }
            callback(data);
        });
    },
    getSala: (body, callback) =>{
        conn.query('SELECT * FROM Salas WHERE Nombre = ?;', [body.Nombre], (err, data)=>{
            if(err){
                callback(err);
            }
            callback(data);
        });
    },
    setSala: (body, callback)=>{
        conn.query('Insert INTO Salas (Nombre, Capacidad, Estado) VALUES (?,?,?);', [body.Nombre, body.Capacidad, body.Estado], (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    },
    deleteSala: (id, callback)=>{
        conn.query('DELETE FROM Salas WHERE Id = ?;', [id], (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    },
    updateSala: (id, body, callback) => { 
        conn.query('UPDATE salas SET Nombre = ?, Capacidad = ? WHERE Id = ?;', [body.Nombre, body.Capacidad, id], (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    },
    updateStatus: (id, body, callback) => {
        conn.query('UPDATE Salas SET Estado = ? WHERE Id = ?;', [body.Estado, id], (err, results) => {
            if (err) {
                callback(err);
            }
            callback(results);
        });
    }
}

module.exports = controlador;