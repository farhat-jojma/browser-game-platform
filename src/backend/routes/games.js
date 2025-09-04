const express = require('express');
const Game = require('../models/Game');

const router = express.Router();

// Get all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get game by id
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add game (admin only, but for now public)
router.post('/', async (req, res) => {
  try {
    const { name, description, url } = req.body;
    const game = new Game({ name, description, url });
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
