const router = require('express').Router();
const spotify = require('./spotify');

router.use('/spotify', spotify);

router.get('/me', (req, res) => {
  res.json(req.user);
});

router.delete('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
