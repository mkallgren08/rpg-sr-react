const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
  findAll: function (req, res) {
    console.log(db.User.findAll)
    db.Bioware
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByName: function(req,res){
  //   db.Bioware
  //   .findAll({where:{bioware_name: req.body.name}})
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // },
  findById: function (req, res) {
    db.Bioware
      .findByPk(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    db.Bioware
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Bioware
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Bioware
      .findByPk({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};