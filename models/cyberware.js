// let path = require("path");

// let User = sequelize.import(path.join(__dirname, "./user.js"));

//let User = require("./user.js")

module.exports = function (sequelize, Sequelize) {

  const Cyberware = sequelize.define('Cyberware', {
    cyber_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    cyber_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    cyber_type: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    cyber_ess: {
      type: Sequelize.FLOAT,
      notEmpty: true
    },
    cyber_capacity: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    cyber_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    cyber_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    cyber_cost_mult: {
      type: Sequelize.STRING,
      notEmpty: false,
      defaultValue: '-'
    },
    cyber_notes: {
      type: Sequelize.TEXT,
      notEmpty: false
    },
  },{
    tableName: 'Cyberware',
    timestamps: false
  });

  // CharacterBase.associate = function (models) {
  //   models.CharacterBase.belongsTo(models.User, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  

  return Cyberware;

}