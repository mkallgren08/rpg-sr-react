module.exports = function (sequelize, Sequelize) {

  var ArmorMods = sequelize.define('ArmorMods', {

    armormod_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    armormod_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    armormod_capacity: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    armormod_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    armormod_basecost: {
      type: Sequelize.INTEGER
    },
    armormod_ratingcost: {
      type: Sequelize.INTEGER
    },
    armormod_notes: {
      type: Sequelize.TEXT
    }
  }, {
      tableName: 'ArmorMods',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return ArmorMods;

}