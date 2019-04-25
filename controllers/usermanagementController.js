const db = require("../models");
const User = require("../models/user")
const Op = db.Sequelize.Op;

module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkStatus: function (req, res) {
    console.log(db.User.findAll)
    db.User.findAll({
      where: {user_email:req.params.email}
    }).then(dbModel => res.json(dbModel))
  },
  // findById: function (req, res) {
  //   db.TestData
  //     .findByPk(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  createUser: function (req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User
      .update(req.body, {where: {user_email:req.body.user_email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function (req, res) {
  //   db.TestData
  //     .findByPk({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};