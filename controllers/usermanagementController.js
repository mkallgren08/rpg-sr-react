const db = require("../models");
const User = require("../models/user")
const Op = db.Sequelize.Op;

module.exports = {
  findAll: function (req, res) {
    db.TestData
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkStatus: function (req, res) {
    // db.User
    //   .find({where: {user_email:req.params.email}})
    //   .sort({ name: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    console.log(db.User.findAll)
    db.User.findAll({
      where: {user_email:req.params.email}
    }).then(dbModel => res.json(dbModel))
  },
  // findById: function (req, res) {
  //   db.TestData
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   db.TestData
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.TestData
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.TestData
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};