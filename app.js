// importing express.js
const expess = require("express");
const app = expess();

// requiring js pages 
const home = require("./routers/home.js");
const about = require("./routers/about.js");

// receiving request from user and going to routers
app.use("/", home);
app.use("/about", about);
app.listen(4000, console.log("listening"));