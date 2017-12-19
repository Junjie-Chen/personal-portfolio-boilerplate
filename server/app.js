const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const database = require('./database');
const sessionStore = new SequelizeStore({ db: database });
const passport = require('passport');
const path = require('path');

const createApp = () => {
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(session({
    secret: process.env.SESSION_SECRET || 'My best music companion is Vinci',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(path.join(__dirname, '..', 'node_modules')));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const syncDatabase = () => {
  database.sync();
};

module.exports = {
  sessionStore,
  createApp,
  syncDatabase,
  app
};
