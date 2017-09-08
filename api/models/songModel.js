'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SongSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the title of the song'
    },
    artist: {
        type: String,
        required: 'Please enter the artist of the song'
    },
    rating: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Song', SongSchema);