const express = require('express');
const router = express.Router();
const models = require('../models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const jwt = require('jsonwebtoken');

router.post('/', function(req, resp){
    models.User.findOne({where:{
        login: req.body.login
    }}).then(user => {
        if (!user || !bcrypt.compareSync(req.body.senha, user.senha))
        resp.status(403).send({error: 'Login ou Senha inválido!'})


    const id = user.id;
    var token = jwt.sign({id}, process.env.SECRET,{
        expiresIn: 300
    })

        resp.status(200).send({auth: true, token: token});
    }).catch(err => {
        resp.status(500).send(err)
    })

})

module.exports = router;