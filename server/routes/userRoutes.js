const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/userController");
const router = require("express").Router();

router.post("/add",addToLikedMovies);
router.get("/getlist/:email",getLikedMovies);
router.put("/remove",removeFromLikedMovies)
module.exports = router;
