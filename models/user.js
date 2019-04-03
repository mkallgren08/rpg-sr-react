module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('User', {
 
        user_id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV1
        },
 
        user_firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        user_lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        user_about: {
            type: Sequelize.TEXT
        },
 
        user_email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },

        user_nickname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        
        user_role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'user'
        }
    },{
      tableName: 'Users',
      timestamps:false
    });

    // User.associate = function(models) {
    //   models.User.hasMany(models.CharacterBase);
    // };
 
    return User;
 
}