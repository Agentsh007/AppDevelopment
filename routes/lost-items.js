const express = require('express');
const LostItem = require('../models/LostItem');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const lostItem = new LostItem({
      ...req.body,
      userEmail: req.user.email,
    });
    await lostItem.save();
    res.status(201).json(lostItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const lostItems = await LostItem.find();
    res.json(lostItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const lostItem = await LostItem.findOneAndUpdate(
      { id: req.params.id },
      { status: req.body.status },
      { new: true }
    );
    if (!lostItem) return res.status(404).json({ message: 'Item not found' });
    res.json(lostItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const lostItem = await LostItem.findOneAndDelete({ id: req.params.id });
    if (!lostItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;