/*
 * filename: movie.js
 * student name: Ayse Gul Genc
 * student number: 301088239
 * Date: March 2, 2022
 * COMP229 Midterm
 */
let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);