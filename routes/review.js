const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review.js");
const listing = require("../models/listing.js");
const wrapAsync = require("../Utils/wrapAsync.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews
//post route
router.post(
  "/",
  isLoggedIn,
  // validateReview,
  wrapAsync(reviewController.createReview)
);

//delete reviews route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  validateReview,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
