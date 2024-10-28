const express = require('express');
const router = express.Router();
const categories = require('../data/categories.json');

// Create a category
router.post('/', (req, res) => {
    const newCategory = { id: categories.length + 1, ...req.body };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// Get all categories
router.get('/', (req, res) => {
    res.json(categories);
});

// Get a single category
router.get('/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
});

// Update a category
router.put('/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ message: 'Category not found' });

    Object.assign(category, req.body);
    res.json(category);
});

// Delete a category
router.delete('/:id', (req, res) => {
    const index = categories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Category not found' });

    categories.splice(index, 1);
    res.json({ message: 'Category deleted' });
});

module.exports = router;
