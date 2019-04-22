// let path = require("path");

// let User = sequelize.import(path.join(__dirname, "./user.js"));

let User = require("./user.js")

module.exports = function (sequelize, Sequelize) {

  const Char = sequelize.define('Char', {
    user_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    race_id: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    char_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      notEmpty: true
    },
    char_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    char_bod: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_agi: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_rea: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_str: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_wil: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_log: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_int: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_cha: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_edg: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_essence: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_mag: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_res: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_init: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    char_height: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    char_age: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_ethnicity: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    char_streetcred: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_notoriety: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_publicity: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_karma: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_totkarma: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    char_misc: {
      type: Sequelize.STRING,
      notEmpty: true
    }
  },{
    tableName: 'Chars',
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

  

  return Char;

}