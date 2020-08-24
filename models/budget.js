
var mongoose = require('mongoose');

var budgetSchema = mongoose.Schema({
    data:{
        type_budget:String,
        value_budget:String
    }
});

module.exports = mongoose.model('budget', budgetSchema);