const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }, 
    description: {
        type: String
    },
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
     coverImage: {
         type: String,
         required: true
     },
     author: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Book'
     }
})

module.exports = mongoose.model('Book', bookSchema)