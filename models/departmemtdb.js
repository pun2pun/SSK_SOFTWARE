
var mongoose = require('mongoose');

var departmemtdb = mongoose.Schema({

    main: String,
    sub: [String]
    
});

module.exports = mongoose.model('departmemtdb', departmemtdb);