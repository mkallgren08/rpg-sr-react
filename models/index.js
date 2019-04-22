'use strict';
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// console.log(env)
// console.log(env === 'development') 
const config = require(__dirname + '/../config/config.js')['production']; // [env]
console.log(JSON.stringify(config,2,null))
const db = {};

//  let sequelize = new Sequelize(process.env.JAWSDB_URL, {dialect: 'mysql'}) 
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(`Testing to see if models are available (should be something other than undefined): ${db.Ammo}`)

// Model/Table Relations

// User-to-Character
db.User.hasMany(db.Char, {foreignKey:'char_id'})
db.Char.belongsTo(db.User, {foreignKey:'user_id'})

// Race-to-Character
db.Race.hasMany(db.Char, {foreignKey:'char_id'})
db.Char.belongsTo(db.Race, {foreignKey:'race_id'})

module.exports = db;
