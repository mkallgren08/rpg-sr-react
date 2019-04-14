const db = require("../models");
const Op = db.Sequelize.Op;

// Establishes the final res for the findAll method of
// the armorController
let finalRes = {
  armor: null,
  armormods: null,
  armoraddons: null
}

let armorController = {
  // Finds all armor, armor mods, and armor addons
  findAll: function (req, res) {
    db.Armor.findAll()
      .then(dbModel => {
        finalRes.armor = dbModel
        db.ArmorMods.findAll()
          .then(dbModel => {
            finalRes.armormods = dbModel
            db.ArmorAddOns.findAll()
              .then(dbModel => {
                finalRes.armoraddons = dbModel
                res.json(finalRes)
              })
              .catch(err => res.status(422).json(err));
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  // Armor ONLY functions
  findAllArmor: function (req, res) {
    db.Armor
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findArmorById: function (req, res) {
    db.Armor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createArmor: function (req, res) {
    console.log(req.body)
    db.Armor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateArmor: function (req, res) {
    db.Armor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeArmor: function (req, res) {
    db.Armor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Armor Mods ONLY functions
  findAllArmorMods: function (req, res) {
    db.ArmorMods
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findArmorModsById: function (req, res) {
    db.ArmorMods
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createArmorMods: function (req, res) {
    console.log(req.body)
    db.ArmorMods
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateArmorMods: function (req, res) {
    db.ArmorMods
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeArmorMods: function (req, res) {
    db.ArmorMods
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Armor Add Ons ONLY functions
  findAllArmorAddOns: function (req, res) {
    db.ArmorAddOns
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findArmorAddOnsById: function (req, res) {
    db.ArmorAddOns
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createArmorAddOns: function (req, res) {
    console.log(req.body)
    db.ArmorAddOns
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateArmorAddOns: function (req, res) {
    db.ArmorAddOns
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeArmorAddOns: function (req, res) {
    db.ArmorAddOns
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

module.exports = armorController;