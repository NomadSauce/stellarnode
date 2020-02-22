const express = require('express')
const router = express.Router()
const book = require('../models/book')

// All books Route
router.get('/', async (req, res) => {
    res.send('All Books')

})

// New book route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book
        })
    } catch  {
        res.redirect('/books')
    }
})

// Create book route
router.post('/', async (req, res) => {
    res.send('Create Book')
})

module.exports = router

