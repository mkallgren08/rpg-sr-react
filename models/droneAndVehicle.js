module.exports = function (sequelize, Sequelize) {

  var DroneAndVehicle = sequelize.define('DroneAndVehicle', {

    droveh_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },

    droveh_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_skill: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_type: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_handl: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_speed: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_accel: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    droveh_bod: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    droveh_armor: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    droveh_pilot: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    droveh_sensor: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    droveh_seats: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_avail: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    droveh_cost: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    droveh_notes: {
      type: Sequelize.TEXT
    }
  }, {
      tableName: 'DronesAndVehicles',
      timestamps: false
    });

  // User.associate = function(models) {
  //   models.User.hasMany(models.CharacterBase);
  // };

  return DroneAndVehicle;

}