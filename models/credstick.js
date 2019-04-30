module.exports = function (sequelize, Sequelize) {

  var Credstick = sequelize.define('Credstick', {

    cred_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    cred_type: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    cred_maxval: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    cred_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    cred_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    }
  }, {
      tableName: 'Credsticks',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return Credstick;

}