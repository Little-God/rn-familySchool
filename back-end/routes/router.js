let express = require('express');
let user = require('../controls/user')
let router = express.Router();

router.get('/lookuser', user.fetchAll);

module.exports = router;