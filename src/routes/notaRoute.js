const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {

    const index = {
        titulo: 'Bem Vindo ao ENotafiscal!',
        menu: 'Menu',
    };

    console.log(index.menu, index.titulo);
    res.status('200').send(index.titulo, index.menu);
});

module.exports = router;
