const Sequelize = require('sequelize');
const database = require('../postgresql');

const User = database.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  },
  spotifyId: {
    type: Sequelize.STRING
  },
  spotifyAccessToken: {
    type: Sequelize.STRING
  }
});

module.exports = User;
