const router = require('express').Router();
const { User } = require('../database/models');
const passport = require('passport');

const SpotifyStrategy = require('passport-spotify').Strategy;

const SpotifyModule = require('spotify-middleware-webapi');

if (!process.env.clientID || !process.env.clientSecret) {
  console.log('Spotify Client ID / Secret not found. Skipping Spotify OAuth.');
} else {
  const configuration = {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL
  };

  const spotifyModule = new SpotifyModule({
    credentials: configuration
  });

  const strategy = new SpotifyStrategy(configuration, (accessToken, refreshToken, profile, done) => {
    spotifyModule.user({
      accessToken: accessToken,
      refreshToken: refreshToken
    }, (err, profile, accessToken) => {
      if (err) {
        done(err);
      } else {
        console.log('profile: ', profile);
        console.log('accessToken: ', accessToken);

        User.findOrCreate({
          where: {
            spotifyId: profile.id
          },
          defaults: {
            email: profile.email,
            spotifyId: profile.id,
            spotifyAccessToken: accessToken
          }
        })
        .spread(user => {
          return user.update({spotifyAccessToken: accessToken}, {
            where: {
              id: user.id
            }
          });
        })
        .then(user => {
          done(null, user);
        })
        .catch(done);
      }
    });
  });

  passport.use(strategy);

  router.get('/', passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private'] }));

  router.get('/callback', passport.authenticate('spotify', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/#music');
  });
}

module.exports = router;
