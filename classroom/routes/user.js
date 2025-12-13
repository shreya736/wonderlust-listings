const express = require("express");
const app = express();
const router = express.Router();

//USER 
router.get("/", (req, res) => {
    res.send("Hi, I am root");
});

//user id
router.get("/:id", (req, res) => {
    res.send("Hi, I am root");
});


module.exports = router;