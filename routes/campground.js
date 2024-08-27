const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Campground = require("../models/campground");
const campgrounds = require("../controllers/campgrounds")
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware")
const multer = require("multer");
const { storage } = require("../cloudinary");  //imported to store images on cloudinary
// const upload = multer({ dest: "uploads/" }); //to upload locally in uploads folder
const upload = multer({ storage }); //to upload on cloudinary cloud

//All logics available in controllers/campgrounds.js

// Add new campground without middleware.js
// router.get("/new", (req, res) => {
//     if (!req.isAuthenticated()) {
//         req.flash("error", "You must be signed in!!");
//         return res.redirect("/login");
//     } moved to middleware.js file
//     res.render("campgrounds/new");
// });

//Lecture 541
//Lecture 549 for image upload on cloud
router.route("/")
    .get(catchAsync(campgrounds.index)) //index is coming from controllers/campgrounds
    .post(isLoggedIn, upload.array("image"), validateCampground, catchAsync(campgrounds.createCampground)); //button when press while create new campground
// .post(upload.array("image"), (req, res) => { //upload.array for multiple images and upload.single for single image
//     console.log(req.body, req.files);
//     res.send("It worked");
// })


router.get("/new", isLoggedIn, campgrounds.renderNewForm); // Add new campground with middleware.js


router.route("/:id")
    .get(catchAsync(campgrounds.showCampground)) // Campground Find by Id
    .put(isLoggedIn, isAuthor, upload.array("image"), validateCampground, catchAsync(campgrounds.updateCampground)) // Update campground
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground)); // Delete campground



router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm)); // Edit Campground





module.exports = router;

