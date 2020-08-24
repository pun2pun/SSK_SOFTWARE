
var mongoose = require('mongoose');

var infoSchemas = mongoose.Schema({

    name_project: String,
    project_status:String,
    name_creator:String,
    data:{
       
        
        year_project:String,
        property_project: String,

        strategyInfo:
        {
            country_strategy:String,
            spt_strategy: String,
            school_standard: String,
            indicator: String,
            Metric: String,
            School_strategy: String,
            Main_project: String,
            Main_activities: String,
        }},
    data_detail:{
        goal:
        {
            body:String,
            Success_Indicators:String,
            Success_conditions:String,
        },
        purpose:
        {
            body:String,
            Success_Indicators:String,
            Success_conditions:String,
        },
        output:
        {
            body:String,
            Success_Indicators:String,
            Success_conditions:String,
        },
        activities:
        {
            body:String,
            Success_Indicators:String,
            Success_conditions:String,
        },
        input:
        {
            body:String,
            Success_Indicators:String,
            Success_conditions:String,
        }},
    data_detail_2:{   
        Proof_of_evidence:
        {
            Assessment_method:String,
            tools:String,
            Budget:String,
            Processing_time:{ Start:String , End:String},
            Responsible_person:String
            
        }},
        Budget:
        {
            operating_budget:
            {
                Compensation:String,
                Living_expenses:String,
                Material_cost:String,
                Public_utility_cost:String
            },
            investment_budget:
            {
                durable_articles:String,
                Structure_cost:String
            },
            total_budget:String

        }
        

    
});

module.exports = mongoose.model('infoSchema', infoSchemas);