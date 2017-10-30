//Dependencies
import express from "express";
import validator from "validator";

const router = new express.Router();

router.get('/profile', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;