'use strict';
module.exports = function(app) {
    const songApp = require('../controllers/songController');

    // todoList Routes
    app.route('/song')
        .get(songApp.listAllSongs)
        .post(songApp.createASong);

    app.route('/song/:songId')
        .get(songApp.retrieveASong)
        .patch(songApp.updateASong)
        .delete(songApp.deleteASong);
};


