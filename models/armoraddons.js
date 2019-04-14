module.exports = function (sequelize, Sequelize) {

  var ArmorAddOns = sequelize.define('ArmorAddOns', {

    armoraddon_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    armoraddon_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    armoraddon_add_rating: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    armoraddon_add_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    armoraddon_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    armoraddon_notes: {
      type: Sequelize.TEXT
    }
  }, {
      tableName: 'ArmorAddOns',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return ArmorAddOns;

}