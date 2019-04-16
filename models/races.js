module.exports = function (sequelize, Sequelize) {

  var Race = sequelize.define('Race', {
    race_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    race_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    min_bod: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_bod: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_agi: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_agi: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_rea: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_rea: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_str: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_str: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_wil: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_wil: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_log: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_log: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_int: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_int: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_cha: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_cha: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    min_edg: {
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    max_edg: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    essence: {
      type: Sequelize.INTEGER,
      notEmpty: true,
       defaultValue: 6
    },
    initiative: {
      type: Sequelize.STRING,
      notEmpty: true,
      defaultValue: 'Rea+Int'
    },
    traits: {
      type: Sequelize.STRING
    }
  }, {
      tableName: 'Races',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return Race;

}