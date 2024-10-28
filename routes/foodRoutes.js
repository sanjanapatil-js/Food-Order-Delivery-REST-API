const express = require('express');
const router = express.Router();
const foods = require('../data/foods.json');

// Create a food item
router.post('/', (req, res) => {
    const newFood = { id: foods.length + 1, ...req.body };
    foods.push(newFood);
    res.status(201).json(newFood);
});

// Get all food items
router.get('/', (req, res) => {
    res.json(foods);
});

// Get a single food item
router.get('/:id', (req, res) => {
    const food = foods.find(f => f.id === parseInt(req.params.id));
    if (!food) return res.status(404).json({ message: 'Food not found' });
    res.json(food);
});

// Update a food item
router.put('/:id', (req, res) => {
    const food = foods.find(f => f.id === parseInt(req.params.id));
    if (!food) return res.status(404).json({ message: 'Food not found' });

    Object.assign(food, req.body);
    res.json(food);
});

// Delete a food item
router.delete('/:id', (req, res) => {
    const index = foods.findIndex(f => f.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Food not found' });

    foods.splice(index, 1);
    res.json({ message: 'Food deleted' });
});

module.exports = router;
