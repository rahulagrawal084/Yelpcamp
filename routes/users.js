const express = require("express");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const { storeReturnTo } = require('../middleware');
const users = require("../controllers/users")


router.route("/register")
    .get(users.renderRegister)  //register new user
    .post(catchAsync(users.register)); //button when press while register new user


router.route("/login")
    .get(users.renderLogin) //login existing user
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login);
// use the storeReturnTo middleware to save the returnTo value from session to res.locals
// passport.authenticate logs the user in and clears req.session
// Now we can use res.locals.returnTo to redirect the user after login

router.get('/logout', users.logout); // logout existing user

module.exports = router;
