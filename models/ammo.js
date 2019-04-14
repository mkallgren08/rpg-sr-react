module.exports = function (sequelize, Sequelize) {

  var Ammo = sequelize.define('Ammo', {

    ammo_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    ammo_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    ammo_dmg_mod: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    ammo_ap_mod: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    ammo_dmg_type1: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    ammo_dmg_type2: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    ammo_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    ammo_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    ammo_notes: {
      type: Sequelize.TEXT
    }
  }, {
      tableName: 'Ammo',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return Ammo;

}