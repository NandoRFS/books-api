const express = require('express');
const router = express.Router();
const models = require('../models');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());


//create
router.post('/', function (req, res){
    models.Author.create(req.body).then(
        author => res.status(200).send(author)
    ).catch(err => res.status(500).send(err))
});

//Get all
router.get('/', function(req, res){
    models.Author.findAll().then(authors =>
        res.status(200).send(authors)
        )
});

//Find one by id
router.get('/:id', function(req, res){
    models.Author.findByPk(req.params.id)
    .then(author => {
        if (!author) {
            res.status(404).send("NOT FOUND")
        }

        res.status(200).send(author)
    }).catch(err => res.status(500).send(err))
});

//Update
router.put('/:id', function(req, res){
    models.Author.findByPk(req.params.id).then(author => {
        if (!author) {
            res.status(404).send("NOT FOUND")
        }

        author.update(req.body);
        res.status(200).send(author)
    })
});

//Delete
router.delete('/:id', function(req, res){
    models.Author.destroy({
        where: {id: req.params.id}
    }).the(author => {
        res.status(200).send('Excluído com sucesso!')
    })
});

module.exports = router;
