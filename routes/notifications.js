const express = require('express');
const Notification = require('../models/Notification');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const notification = new Notification({
      ...req.body,
      userEmail: req.body.userEmail,
      finderEmail: req.user.email,
    });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:userEmail', auth, async (req, res) => {
  try {
    const notifications = await Notification.find({ userEmail: req.params.userEmail });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;