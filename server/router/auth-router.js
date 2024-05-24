const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate= require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
//router.get("/",(req,res)=>{
  //  res
    //.status(200)
    //.send("welcome to my first express js page using router");
//});
router.route("/").get(authControllers.home);
router
.route("/register")
.post(validate(signupSchema),authControllers.register);
router.route("/login").post(authControllers.login);

router.route("/user").get(authMiddleware,authControllers.user);
//router.route("/register").get((req,res)=>{
  //  res
    //.status(200)
    //.send("register karo jaldi se");
//});

/*app.get("/register",(req,res)=>{
    res.status(200).send("registration page");
});*/
module.exports = router;
