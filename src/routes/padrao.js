let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'ok',
        message: 'Servidor funcionando (saúde)'
    });
});

module.exports = router;