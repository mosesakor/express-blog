var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/userController')
const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign-up', user_controller.signup);

router.post('/login', user_controller.login);

router.get('/logout', user_controller.logout);

module.exports = router;
