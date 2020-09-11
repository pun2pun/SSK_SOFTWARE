
var mongoose = require('mongoose');

var plandb = mongoose.Schema({

    contry_statigy: [String],
    spt_statigy: [String],
    shool_standard:[String],
    indicator:[String],
    target:[String],
    school__statigy:[String],
    main_project_school:[String],
    main_activities:[String]

});

module.exports = mongoose.model('plandb', plandb);