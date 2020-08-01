module.exports = function(app) {

    var fs = require("fs");
    var path = require('path');
    var functions = require('../controllers/functions');

    var user_following = { "user" : "", "Following": [] };    
    var user_follower = { "user" : "", "Followers": [] };

    app.get('/users', (req, res) => {
        var users_path = path.join(__dirname, '..', 'data', 'users.json');
        fs.readFile(users_path, 'utf8', function (err, data) {
            var users = JSON.parse( data );
            res.send( data );
        });
    });    

    app.get('/users/:username/following', (req, res) => {
        var users_path = path.join(__dirname, '..', 'data', 'users.json');
        const username = req.params.username;
        fs.readFile(users_path, 'utf8', function (err, data) {
            var users = JSON.parse( data );
            user_following["user"] = username;
            user_following["Following"] = users[username]["Following"];
            res.send( user_following );
        });
    });  
    
    app.get('/users/:username/followers', (req, res) => {
        var users_path = path.join(__dirname, '..', 'data', 'users.json');
        const username = req.params.username;
        fs.readFile(users_path, 'utf8', function (err, data) {
            var users = JSON.parse( data );
            user_follower["user"] = username;
            user_follower["Followers"] = users[username]["Followers"];
            res.send( user_follower );
        });
    });     

    app.get('/users/:user1/distance/:user2', (req, res) => {
        var users_path = path.join(__dirname, '..', 'data', 'users.json');
        const userA = req.params.user1;
        const userB = req.params.user2;
        fs.readFile(users_path, 'utf8', function (err, data) {
            var users = JSON.parse( data );
            const degree = functions.calculateDistance(userA,userB,users);
            res.send( { 'distance': degree } );
        });
    });
    
};