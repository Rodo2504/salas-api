const express   = require('express');
const router    = express.Router();
const salasCtrl = require('../controllers/salasCtrl');

router.get('/salas', (req, res)=>{
    salasCtrl.getSalas((data)=>{
        res.json(data);
    });
});
router.post('/validarSala', (req, res)=>{
    salasCtrl.getSala(req.body, (data)=>{
        res.json(data);
    });
});
router.post('/sala', (req, res)=>{
    //aqui meter la funcion para validar si existe una sala con ese nombre
    salasCtrl.setSala(req.body, (data)=>{
        res.json(data);
    });
});
router.delete('/sala/:id', (req, res)=>{
    salasCtrl.deleteSala(req.params.id, (data)=>{
        res.json(data);
    });
});
router.put('/sala/:id', (req, res)=>{
    //aqui meter la funcion para validar si existe una sala con ese nombre
    salasCtrl.updateSala(req.params.id, req.body, (data)=>{
        res.json(data);
    });
});
router.put('/estado/:id', (req, res)=>{
    salasCtrl.updateStatus(req.params.id, req.body, (data)=>{
        res.json(data);
    });
});

module.exports = router;