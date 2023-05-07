//const express       = require('express');
import express from 'express';
const router        = express.Router();
//const reservasCtrl  = require('../controllers/reservasCtrl');
import reservasCtrl from '../controllers/reservasCtrl.js';

router.get('/reservas', (req, res)=>{
    reservasCtrl.getReservas(data=>{
        res.json(data);
    });
});
router.post('/reserva', (req, res)=>{
    reservasCtrl.setReserva(req.body, (data)=>{
        res.json(data);
    });
});
router.get('/reservas/:sala', (req, res)=>{
    reservasCtrl.getReservasSala(req.params.sala, (data)=>{
        res.json(data);
    });
});
router.delete('/reserva/:id', (req, res)=>{
    reservasCtrl.deleteReserva(req.params.id, (data)=>{
        res.json(data);
    });
});
router.put('/reserva/:id', (req, res)=>{
    reservasCtrl.updateStatus(req.params.id, req.body, (data)=>{
        res.json(data);
    });
});

module.exports = router;
