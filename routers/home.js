// getting a router from express
const router = require("express").Router();

// entertaining the coming request from app.js
router.get("/", (req, res)=>{
    res.send("HomePage");
});

// exporting module back to app.js
module.exports = router;