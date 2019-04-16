const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
  findAll: function (req, res) {
    db.Attr
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
