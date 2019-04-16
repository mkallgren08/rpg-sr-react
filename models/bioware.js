module.exports = function (sequelize, Sequelize) {

  var Bioware = sequelize.define('Bioware', {

    bioware_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    bioware_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    bioware_max_rating: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    bioware_rate_mult:{
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 1
    },
    bioware_ess: {
      type: Sequelize.FLOAT
    },
    bioware_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    bioware_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    bioware_cultured:{
      type: Sequelize.INTEGER,
      notEmpty: true,
      defaultValue: 0
    },
    bioware_notes: {
      type: Sequelize.TEXT
    }
  }, {
      tableName: 'Bioware',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return Bioware;

}