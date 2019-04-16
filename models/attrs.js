module.exports = function (sequelize, Sequelize) {

  var Attr = sequelize.define('Attr', {

    attr_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    attr_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    attr_abbrev: {
      type: Sequelize.STRING,
      notEmpty: true
    }
  }, {
      tableName: 'Attrs',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return Attr;

}