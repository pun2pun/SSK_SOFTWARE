
var mongoose = require('mongoose');

var forAppove = mongoose.Schema({
    Project_name:String,
    Department:String,
    Work_target:String,
    Detail:String,
    Income_budget:
    {
        Study_budget:String,
        Activity_budget:String,
        Income_shool:String,
        Genaral_budget:String,
        Other:String
    },
    Payment_info:
    {
        Genaral:String,
        Material:String,
        Equipment:String,
        Wage:String,
        Other:String
    },
    Budget_project:String,
    Budget_project_balance:String,
    Withdraw:String,
    balacne_after_withdraw:String


    
    
});

module.exports = mongoose.model('forAppove', forAppove);