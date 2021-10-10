const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {

    const index = [
        {
            titulo: 'Bem Vindo ao ENotafiscal!',
            menu: 'Menu'
        },
        {
            titulo: 'Novamente aqui...',
            menu: 'Outro menu'
        }
    ];
    
    res.status(200).send(index);
});

module.exports = router;
