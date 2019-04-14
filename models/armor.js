module.exports = function (sequelize, Sequelize) {

  var Armor = sequelize.define('Armor', {

    armor_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    armor_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    armor_rating: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    armor_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    armor_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    armor_notes: {
      type: Sequelize.TEXT
    }
  }, {
      tableName: 'Armor',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return Armor;

}