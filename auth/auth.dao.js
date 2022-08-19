const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create: function (data, cb) {
        const user = new this( data );
        user.save(cb);
    },
}