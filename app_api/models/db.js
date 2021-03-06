const mongoose = require('mongoose');

const dbURI = 'mongodb://joueliii:wQ9vMyaewFDG6bw@ds046037.mlab.com:46037/filmphotofriend_db';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require('./appSchemas');