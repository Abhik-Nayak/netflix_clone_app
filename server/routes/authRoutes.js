const {signup} = require("../controllers/auth");
const router = require("express").Router();

router.post('/signup', signup);

module.exports = router;