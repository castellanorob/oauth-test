const router = require('express').Router();
const passport = require('passport');

// auth logout
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
})

// Google auth
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
})); 

// Callback route for Google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the callback URI')
})

module.exports = router;