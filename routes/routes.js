

module.exports = function (app, passport) {
    //var MongoClient = require('mongodb').MongoClient;
    //var url = "mongodb://localhost:27017/";
    var budget = require('../models/budget');
    var User = require('../models/user');
    var infoShema = require('../models/infoShema');
    var forAppove = require('../models/forAppove');
    var departmemtdb = require('../models/departmemtdb');
    var plandb = require('../models/plandb');
    var randomstring = require("randomstring");
    var budgetSpare;

    //หน้าหลัก
    app.get('/', function (req, res) {
        res.render('page/login.ejs', { message: req.flash('loginMessage') });
    
    });

    //หน้าเข้าสู่ระบบ
    app.get('/login', function (req, res) {
        res.render('page/login.ejs', { message: req.flash('loginMessage') });
    });



    //ตัวจัดการเข้าสู่ระบบ
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    //เสนอโครงการ

    app.get('/SFM000', isLoggedIn, function (req, res) {
        

        departmemtdb.find(function(er,data){
           // console.log(data);
            res.render('page/send_form_0.ejs', {
                user: req.user,
                departmentData:data
            });
        })


       
    });
    app.get('/SFM001', isLoggedIn, function (req, res) {
        
        res.render('page/send_form_1.ejs', {
            user: req.user
        });
    });
    app.get('/SFM002', isLoggedIn, function (req, res) {
        res.render('page/send_form_2.ejs', {
            user: req.user
        });
    });
    app.get('/SFM003', isLoggedIn, function (req, res) {
        res.render('page/send_form_3.ejs', {
            user: req.user
        });
    });
    app.get('/SFM004', isLoggedIn, function (req, res) {
        res.render('page/send_form_4.ejs', {
            user: req.user
        });
    });

    app.post('/SFM001', function (req, res) {
        console.log(req.user);
        var newInfoProject = new infoShema();
        var project_id = randomstring.generate(30);
        newInfoProject.project_ID = project_id
        newInfoProject.name_creator = req.user.local.name;
        newInfoProject.department = req.body.departmentSelect;
        newInfoProject.Budget_type = req.body.budgetTypeSelect;
        
     
        newInfoProject.save(function(){
            plandb.findOne({},function(err,data){
                //console.log(data);
                res.render('page/send_form_1.ejs', {
                    user: req.user,
                    project_ID:project_id,
                    budget_type:req.body.budgetTypeSelect,
                    plan_info:data
                });
            })
        })
        
    });

    app.post('/SFM002',function(req,res){

        console.log(req.body)
        
        const filter = {project_ID:req.body.project_ID};
        const update = {
            name_project:req.body.name_project,
            data:{
                year_project: req.body.year_project,
                property_project:req.body.property_project,
                property_project_2:req.body.property_project_2,
                strategyInfo:
                    {
                        country_strategy:req.body.country_strategy,
                        spt_strategy: req.body.spt_strategy,
                        school_standard:  req.body.school_standard,
                        indicator:  req.body.indicator,
                        Metric: req.body.Metric,
                        School_strategy: req.body.School_strategy,
                        Main_project: req.body.Main_project,
                        Main_activities: req.body.Main_activities,
                    }
            }

        }
        
       
        infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
            // console.log(doc)
             if(err){ console.log(err)}
             res.render('page/send_form_2.ejs',{
                 user: req.user,
                 project_ID:req.body.project_ID,
                 budget_type:[req.body.budget_type,req.body.indicator,req.body.Metric]
             });
         })
        
    })

        
   

    app.post('/SFM003',function(req,res){
        //console.log(req.body.name_project)
              
        const filter = {project_ID:req.body.project_ID};
        const update = {data_detail:{ 
            goal:{
                body:req.body.g4_1,
                Success_Indicators:req.body.g4_2,
                Success_conditions:req.body.g4_3,
            },
            purpose:
            {
                body:req.body.p5_1,
                Success_Indicators:req.body.p5_2,
                Success_conditions:req.body.p5_3,
            },
            output:
            {
                body:req.body.o6_1,
                Success_Indicators:req.body.o6_2,
                Success_conditions:req.body.o6_3,
            },
            activities:
            {
                body:req.body.a7_1,
                Success_Indicators:req.body.a7_2,
                Success_conditions:req.body.a7_3,
            },
            input:
            {
                body:req.body.i8_1,
                Success_Indicators:req.body.i8_1,
                Success_conditions:req.body.i8_1,
            },
        }};
        
        infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
           // console.log(doc)
            if(err){ console.log(err)}
            res.render('page/send_form_3.ejs',{
                user: req.user,
                project_ID:req.body.project_ID
            });
        })
        
        
        
    })

    app.post('/SFM004',function(req,res){
       // console.log(req.body)
        const filter = {project_ID:req.body.project_ID};
        const update = {data_detail_2:{ 
            Proof_of_evidence:
            {
                Assessment_method:req.body.s9_1,
                tools:req.body.s9_2,
                Budget:[req.body.budget_1,req.body.budget_2,req.body.budget_3,req.body.budget_4,req.body.budget_5,req.body.budget_6],
                Processing_time:{ Start:req.body.start_time , End:req.body.end_time},
                Responsible_person:req.body.s9_5
                
            }   
       }};
       
       infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
           //console.log(doc)
           if(err){ console.log(err)}
           res.render('page/send_form_4.ejs',{
               user: req.user,
               project_ID:req.body.project_ID
           });
       })
        
    })



    

    app.post('/SFM005',function(req,res){
        
        console.log(req.body)
        var pserson_budget_json = JSON.parse(req.body.Person_List_data);
        var Compensation_budget_json = JSON.parse(req.body.Compensation_List_data);
        var Genaral_cost_budget_json = JSON.parse(req.body.Genaral_cost_List_data);
        var Material_budget_json = JSON.parse(req.body.Material_cost_List_data);
        var Public_budget_json = JSON.parse(req.body.Public_cost_List_data);
        var durable_articles_budget_json = JSON.parse(req.body.durable_articles_List_data);
        var Building_budget_json = JSON.parse(req.body.Building_List_data);

        var pserson_budget_array = []
        var Compensation_budget_array = []
        var Genaral_cost_budget_array = []
        var Material_budget_array = []
        var Public_budget_array = []
        var durable_articles_budget_array = []
        var Building_budget_array = []

        var total_budget_cal = 0;

          for (var key in pserson_budget_json) {
            pserson_budget_array.push([key,pserson_budget_json[key][0],pserson_budget_json[key][1],pserson_budget_json[key][2],pserson_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (pserson_budget_json[key][0]*1) * (pserson_budget_json[key][1]*1))
          }
          for (var key in Compensation_budget_json) {
            Compensation_budget_array.push([key,Compensation_budget_json[key][0],Compensation_budget_json[key][1],Compensation_budget_json[key][2],Compensation_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (Compensation_budget_json[key][0]*1) * (Compensation_budget_json[key][1]*1))
          }
          for (var key in Genaral_cost_budget_json) {
            Genaral_cost_budget_array.push([key,Genaral_cost_budget_json[key][0],Genaral_cost_budget_json[key][1],Genaral_cost_budget_json[key][2],Genaral_cost_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (Genaral_cost_budget_json[key][0]*1) * (Genaral_cost_budget_json[key][1]*1))
        }
          for (var key in Material_budget_json) {
            Material_budget_array.push([key,Material_budget_json[key][0],Material_budget_json[key][1],Material_budget_json[key][2],Material_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (Material_budget_json[key][0]*1) * (Material_budget_json[key][1]*1))
        }
          for (var key in Public_budget_json) {
            Public_budget_array.push([key,Public_budget_json[key][0],Public_budget_json[key][1],Public_budget_json[key][2],Public_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (Public_budget_json[key][0]*1) * (Public_budget_json[key][1]*1))
        }
          for (var key in durable_articles_budget_json) {
            durable_articles_budget_array.push([key,durable_articles_budget_json[key][0],durable_articles_budget_json[key][1],durable_articles_budget_json[key][2],durable_articles_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (durable_articles_budget_json[key][0]*1) * (durable_articles_budget_json[key][1]*1))
        }
          for (var key in Building_budget_json) {
            Building_budget_array.push([key,Building_budget_json[key][0],Building_budget_json[key][1],Building_budget_json[key][2],Building_budget_json[key][3]])
            total_budget_cal =total_budget_cal + ( (Building_budget_json[key][0]*1) * (Building_budget_json[key][1]*1))
        }
       
        console.log(pserson_budget_array)
        const filter = {project_ID:req.body.project_ID};
        const update = {
            project_status:"เสนอโครงการ" ,
            Budget:{ 
            person:pserson_budget_array,
            operating_budget:
            {
                Compensation:Compensation_budget_array,
                Living_expenses:Genaral_cost_budget_array,
                Material_cost:Material_budget_array,
                Public_utility_cost:Public_budget_array
            },
            investment_budget:
            {
                durable_articles:durable_articles_budget_array,
                Structure_cost:Building_budget_array
            },
            total_budget:total_budget_cal   
       }};
       
       infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
           console.log(req.body.name_project)
           if(err){ console.log(err)}

           infoShema.findOne({name_project:req.body.name_project},function(error, comments){           
                          
            console.log(comments)
           
           

            })

           res.render('page/send_form_5.ejs',{
               user: req.user,
               project_ID:req.body.project_ID
           });
       })
       
   })

   
        
  
    //แก้ไขข้อมูลผู้ใช้
    app.post('/edit_member',function(req,res){
        const filter = {local:{ name: req.body.name_appove }};
        const update = {local:{ verified: true }};
       // console.log(filter)
       console.log(req.body.name_appove)
        User.findOneAndUpdate(filter,update,function(err,doc){
            console.log(doc)
            if(err){ console.log(err)}
            res.redirect('/me11');
        })

      
    });

    //ตัวจัดการเพิ่มงบ
    app.post('/abg23',function(req,res){
       // console.log(req.body.type_budget)

        
        var newBudget = new budget();
        
        newBudget.data.type_budget = req.body.type_budget;
        newBudget.data.value_budget = req.body.value_budget;
       
        newBudget.save(function(err){
            if (err)
               throw err;

                    budget.find({},function(error, comments){           
                        result= comments      
                        
                        infoShema.find({},function(error, bg){           
                
                            var use_budget = 0;
                            for (let index = 0; index < bg.length; index++) {
                                console.log(bg[index].Budget.total_budget)
                               if(bg[index].Budget.total_budget != null && bg[index].Budget.total_budget != "" &&bg[index].Budget.total_budget != undefined){
                                use_budget = use_budget + parseInt(bg[index].Budget.total_budget)
                               }
                                
                            }
                        res.render('admin_view/budget_edit.ejs',{ budget_info: result ,used_budget:use_budget});  
                        }); 
                    
                    });  
                }); 
        
    });

    //ตัวจัดการเพิ่มงบ
    app.post('/dbg23',function(req,res){
        
        var choice = String(req.body.choice_delete)
        choice = choice.split(",")

        var filter = {data:{value_budget:choice[1].trim(),type_budget:choice[0].trim()}};

        console.log(filter);
        

        budget.remove(filter, function(err, obj) {
            if (err) throw err;

            budget.find({},function(error, comments){           
                result= comments      
                
                infoShema.find({},function(error, bg){           
        
                    var use_budget = 0;
                    for (let index = 0; index < bg.length; index++) {
                        console.log(bg[index].Budget.total_budget)
                       if(bg[index].Budget.total_budget != null && bg[index].Budget.total_budget != "" &&bg[index].Budget.total_budget != undefined){
                        use_budget = use_budget + parseInt(bg[index].Budget.total_budget)
                       }
                        
                    }
                res.render('admin_view/budget_edit.ejs',{ budget_info: result ,used_budget:use_budget});  
                }); 
            
            });  
            });

    });



    


    //หน้าสมัครสมาชิก
    app.get('/signup', function (req, res) {
        res.render('page/signup.ejs', { message: req.flash('signupMessage') });
    });

    // ตัวจัดการการสมัครสมาชิก
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', //สมัครสมาชิกสำเร็จ
        failureRedirect: '/signup', //ถ้าสมัครสมาชิกไม่สำเร็จ
        failureFlash: true 
    }));

    //หน้าโปรไฟล์
    app.get('/profile', isLoggedIn, function (req, res) {
        console.log(req.user.local)
        profilePage = 'page/login.ejs';
        if(req.user.local.verified){

                if(req.user.local.level == 'Admin'){
                    profilePage  = 'admin_view/admin_home.ejs'
                      
                            infoShema.find({},function(error, comments2){        
                                        
                            res.render(profilePage, {projectInfo:comments2 , user: req.user }); 
                                });    
                       
                }
                else{
                    profilePage = 'page/profile.ejs';
                    infoShema.find({},function(error, comments){           
                        console.log(comments.length)
                        res.render(profilePage, { projectInfo:comments, user: req.user });    
                        }); 
                }
             
        }
        else{
            res.render('page/login.ejs', { message: req.flash('loginMessage') });
        }  
    });

    //ออกจากระบบ
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.post('/projectDetail', function (req, res) {

        console.log(req.body)  
        
        infoShema.findOne({project_ID: req.body.project_ID}, function(err,obj) {

            plandb.findOne({},function(err,planData){                   
                var country_strategy_index= planData.contry_statigy.indexOf(obj.data.strategyInfo.country_strategy);
                var spt_strategy_index= planData.spt_statigy.indexOf(obj.data.strategyInfo.spt_strategy);
                var school_standard_index = planData.shool_standard.indexOf(obj.data.strategyInfo.school_standard);
                var indicator_index = planData.indicator.indexOf(obj.data.strategyInfo.indicator);
                var Metric_index = planData.target.indexOf(obj.data.strategyInfo.Metric);
                var School_strategy_index = planData.school__statigy.indexOf(obj.data.strategyInfo.School_strategy);
                var Main_project_index = planData.main_project_school.indexOf(obj.data.strategyInfo.Main_project);
                var Main_activities_index = planData.main_activities.indexOf(obj.data.strategyInfo.Main_activities);

                res.render('page/project_view.ejs', { 
                    projectInfo:obj, 
                    user: req.user ,
                    strategy_index_list:[country_strategy_index,
                        spt_strategy_index,
                        school_standard_index,
                        indicator_index,
                        Metric_index,
                        School_strategy_index,
                        Main_project_index,
                        Main_activities_index
                    ]
                });
            })       
         });       
    });


    app.post('/projectEdit', function (req, res) {
        var Edit_filter = {
            project_ID: req.body.project_ID
        }
        infoShema.findOne(Edit_filter,function(err, obj){
            plandb.findOne({},function(err,planData){                   
                var country_strategy_index= planData.contry_statigy.indexOf(obj.data.strategyInfo.country_strategy);
                var spt_strategy_index= planData.spt_statigy.indexOf(obj.data.strategyInfo.spt_strategy);
                var school_standard_index = planData.shool_standard.indexOf(obj.data.strategyInfo.school_standard);
                var indicator_index = planData.indicator.indexOf(obj.data.strategyInfo.indicator);
                var Metric_index = planData.target.indexOf(obj.data.strategyInfo.Metric);
                var School_strategy_index = planData.school__statigy.indexOf(obj.data.strategyInfo.School_strategy);
                var Main_project_index = planData.main_project_school.indexOf(obj.data.strategyInfo.Main_project);
                var Main_activities_index = planData.main_activities.indexOf(obj.data.strategyInfo.Main_activities);

                res.render('page/edit_page.ejs', { 
                    projectInfo:obj, 
                    project_ID:req.body.project_ID,
                    user: req.user ,
                    strategy_index_list:[country_strategy_index,
                        spt_strategy_index,
                        school_standard_index,
                        indicator_index,
                        Metric_index,
                        School_strategy_index,
                        Main_project_index,
                        Main_activities_index
                    ]
                });
            })
        })
    });

    app.post('/projectEdit/save', function (req, res) {
        var Edit_filter = {
            project_ID: req.body.project_ID
        }
        var edit_update = {
            data_detail:{ 
                goal:{
                    body:req.body.goal_body,
                    Success_Indicators:req.body.goal_Success_Indicators,
                    Success_conditions:req.body.goal_Success_conditions,
                },
                purpose:
                {
                    body:req.body.purpose_body,
                    Success_Indicators:req.body.purpose_Success_Indicators,
                    Success_conditions:req.body.purpose_Success_conditions,
                },
                output:
                {
                    body:req.body.output_body,
                    Success_Indicators:req.body.output_Success_Indicators,
                    Success_conditions:req.body.output_Success_conditions,
                },
                activities:
                {
                    body:req.body.activities_body,
                    Success_Indicators:req.body.activities_Success_Indicators,
                    Success_conditions:req.body.activities_Success_conditions,
                },
                input:
                {
                    body:req.body.input_body,
                    Success_Indicators:req.body.input_Success_Indicators,
                    Success_conditions:req.body.input_Success_conditions,
                }
            },
            data_detail_2:{ 
                Proof_of_evidence:
                {
                    Assessment_method:req.body.Assessment_method,
                    tools:req.body.tools,
                    Budget:[req.body.budget_1,req.body.budget_2,req.body.budget_3,req.body.budget_4,req.body.budget_5],
                    Processing_time:{ Start:req.body.start_date , End:req.body.End_date},
                    Responsible_person:req.body.Responsible_person
                    
                }   
           }
        }
        infoShema.findOneAndUpdate(Edit_filter,edit_update,{new: true,upsert:true}, function(err,doc){
        
            infoShema.find({},function(error, comments){           
                console.log(comments.length)
                res.redirect('/profile');    
                });
 
       
        })
    });

    app.post('/projectErase', function (req, res) {
        var delete_filter = {
            project_ID: req.body.project_ID
        }
        infoShema.deleteOne(delete_filter,function(err, result){
            res.redirect("/profile")
        })
    });

   

    app.get('/AP001', isLoggedIn, function (req, res) {
        
        infoShema.find({},function(error, comments){           
            //console.log(comments.length)
            res.render('general_page/appoved_project.ejs', { projectInfo:comments, user: req.user });    
            }); 
    });
    /*
    app.post('/AP002', isLoggedIn, function (req, res) {
        
            console.log(req.body);
            res.render('general_page/step_one.ejs', { project_select:req.body,user: req.user });    
     
    });
    */
    app.post('/AP003', isLoggedIn, function (req, res) {
        
        console.log(req.body)

        const filter = {name_project:req.body.name_project};
        const update = { project_status:"ยื่นอนุมัติโครงการ" };

        infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
            console.log(req.body.name_project)
            if(err){ console.log(err)}

            var newforAppove = new forAppove();

            newforAppove.Project_name = req.body.name_project;
            newforAppove.Department = req.body.Department;
            newforAppove.Work_target = req.body.Detail;
            newforAppove.Detail = req.body.Detail;

            newforAppove.Income_budget.Study_budget = req.body.Study_budget;
            newforAppove.Income_budget.Activity_budget = req.body.Activity_budget;
            newforAppove.Income_budget.Income_shool = req.body.Income_shool;
            newforAppove.Income_budget.Genaral_budget = req.body.Genaral_budget;
            newforAppove.Income_budget.Other = req.body.Other;

            newforAppove.Payment_info.Genaral = req.body.Genaral;
            newforAppove.Payment_info.Material = req.body.Material;
            newforAppove.Payment_info.Equipment = req.body.Equipment;
            newforAppove.Payment_info.Wage = req.body.Wage;
            newforAppove.Payment_info.Other = req.body.Other_pay;

            newforAppove.Budget_project = req.body.Budget_project;
            newforAppove.Budget_project_balance = req.body.Budget_project_balance;
            newforAppove.Withdraw = req.body.Withdraw;
            newforAppove.balacne_after_withdraw = req.body.balacne_after_withdraw;


            newforAppove.save(function (err) {
                if (err)
                    throw err;
               
            });

 
            infoShema.find({},function(error, comments){           
                console.log(comments.length)
                res.render('page/profile.ejs', { projectInfo:comments, user: req.user });    
                });
 
       
        })
         
     
 
});
//--------------------------------- admin page ----------------------------------

    app.get('/manage', function (req, res) {
        res.render('admin_view/manage.ejs');
    });
    app.get('/admin_home', function (req, res) {
        res.render('admin_view/admin_home.ejs',{ user: req.user});
    });

    app.get('/me11', function (req, res) {
       
        
        var result;
        
        User.find({},function(error, comments){
             result = comments
             
             res.render('admin_view/member_edit.ejs',{ contacts: result });
           // console.log(result)
        });        
    });

    app.get('/mb11', function (req, res) {
        
        budget.find({},function(error, comments){
            result = comments
           
            infoShema.find({},function(error, bg){           
                
                var use_budget = 0;
                for (let index = 0; index < bg.length; index++) {
                    console.log(bg[index].Budget.total_budget)
                   if(bg[index].Budget.total_budget != null && bg[index].Budget.total_budget != "" &&bg[index].Budget.total_budget != undefined){
                    use_budget = use_budget + parseInt(bg[index].Budget.total_budget)
                   }
                    
                }
            res.render('admin_view/budget_edit.ejs',{ budget_info: result ,used_budget:use_budget});
                });
            
          // console.log(result)
       }); 
      
    });

    app.get('/Test',function(req,res){

        
        
        infoShema.find({},function(error, comments){           
                          
            console.log(comments)
            var creator = require('../models/createDocx');
            var john = new creator(comments.name_project,comments[0]);

            });  

        });

        app.get('/project_list',function(req,res){

            infoShema.find({},function(error, comments){           
                console.log(comments.length)
                res.render('admin_view/project_list.ejs', { projectInfo:comments, user: req.user });    
                }); 
        })

        
        
        
};




 


//เช็คว่าทำการเข้าสู่ระบบมาหรือยัง?
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}