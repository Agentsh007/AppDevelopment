const express = require('express');
const Report = require('../models/Report');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const report = new Report({
      userEmail: req.user.email,
      message: req.body.message,
      timestamp: new Date(req.body.timestamp),
    });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;