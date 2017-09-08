'use strict';

const mongoose = require('mongoose');
const Song = mongoose.model('Song');

exports.listAllSongs = (req, res) => {
    Song.find({}, (err, song) => {
        if (err) {
            res.send(err);
        } 
        res.json(song);
    });
};

exports.createASong = (req, res) => {
    const newSong = new Song(req.body);
    newSong.save((err, song) => {
        if (err) {
            res.send(err);
        }
        res.json(song);
    });
};

exports.retrieveASong = (req, res) => {
    Song.findById(req.params.taskId, (err, song) => {
        if (err) {
            res.send(err);
        }
        res.json(song);
    });
};

exports.updateASong = (req, res) => {
    Song.findOneAndUpdate({ _id: req.params.songId }, req.body, { new: true}, (err, song) => {
        if (err) {
            res.send(err);
        }
        res.json(song);
    });
};

exports.deleteASong = (req, res) => {
    Song.remove(
        { _id: req.params.songId }, (err, song) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Song successfully removed' });
        });
};