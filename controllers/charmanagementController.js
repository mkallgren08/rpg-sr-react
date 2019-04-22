const db = require("../models");
//const Char = require("../models/char")
const Op = db.Sequelize.Op;

module.exports = {
  findAll: function (req, res) {
    console.log('Finding all chars')
    db.Char
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log('Finding char by id')
    db.Char
      .findByPk(req.params.id, {include: [db.User, db.Race]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    console.log('Finding char by user')
    db.Char
      .findAll({where: {user_id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  create: function (req, res) {
    console.log(req.body)
    db.Char
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function (req, res) {
  //   db.Char
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Char
  //     .findByPk({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};