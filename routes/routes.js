

module.exports = function (app, passport) {
    //var MongoClient = require('mongodb').MongoClient;
    //var url = "mongodb://localhost:27017/";
    var budget = require('../models/budget');
    var User = require('../models/user');
    var infoShema = require('../models/infoShema');
    var forAppove = require('../models/forAppove');
    var budgetSpare;

    //หน้าหลัก
    app.get('/', function (req, res) {
        res.render('page/index.ejs'); 
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

    app.post('/SFM002',function(req,res){
        console.log(req.body.name_project)

        var newInfoProject = new infoShema();
        
        newInfoProject.name_project = req.body.name_project;
        newInfoProject.name_creator = req.body.user_name;
        newInfoProject.data.year_project = req.body.year_project;
        newInfoProject.data.property_project = req.body.property_project;

    
        newInfoProject.data.strategyInfo.country_strategy =  req.body.country_strategy;
        newInfoProject.data.strategyInfo.spt_strategy =  req.body.spt_strategy;
        newInfoProject.data.strategyInfo.school_standard =  req.body.school_standard;
        newInfoProject.data.strategyInfo.indicator =  req.body.indicator;
        newInfoProject.data.strategyInfo.Metric =  req.body.Metric;
        newInfoProject.data.strategyInfo.School_strategy =  req.body.School_strategy;
        newInfoProject.data.strategyInfo.Main_project =  req.body.Main_project;
        newInfoProject.data.strategyInfo.Main_activities =  req.body.Main_activities;

        if(req.body.name_project != null || req.body.name_project.trim() !=""){
            newInfoProject.save(function (err) {
                if (err)
                    throw err;
               
            });
        }
       


        res.render('page/send_form_2.ejs',{
            user: req.user,
            name_project:req.body.name_project
            
        });
        
    })

        
   

    app.post('/SFM003',function(req,res){
        //console.log(req.body.name_project)
              
        const filter = {name_project:req.body.name_project};
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
                name_project:req.body.name_project
            });
        })
        
        
        
    })

    app.post('/SFM004',function(req,res){
       // console.log(req.body)
        const filter = {name_project:req.body.name_project};
        const update = {data_detail_2:{ 
            Proof_of_evidence:
            {
                Assessment_method:req.body.s9_1,
                tools:req.body.s9_2,
                Budget:req.body.s9_3,
                Processing_time:{ Start:req.body.start_time , End:req.body.end_time},
                Responsible_person:req.body.s9_5
                
            }   
       }};
       
       infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
           //console.log(doc)
           if(err){ console.log(err)}
           res.render('page/send_form_4.ejs',{
               user: req.user,
               name_project:req.body.name_project
           });
       })
        
    })



    

    app.post('/SFM005',function(req,res){
        //console.log(req.body)
        const filter = {name_project:req.body.name_project};
        const update = {
            project_status:"เสนอโครงการ" ,
            Budget:{ 
            operating_budget:
            {
                Compensation:req.body.Compensation,
                Living_expenses:req.body.Living_expenses,
                Material_costMaterial_cost:req.body.Material_costMaterial_cost,
                Public_utility_cost:req.body.Public_utility_cost
            },
            investment_budget:
            {
                durable_articles:req.body.durable_articles,
                Structure_cost:req.body.Structure_cost
            },
            total_budget:req.body.total_budget   
       }};
       
       infoShema.findOneAndUpdate(filter,update,{new: true,upsert:true}, function(err,doc){
           console.log(req.body.name_project)
           if(err){ console.log(err)}

           infoShema.findOne({name_project:req.body.name_project},function(error, comments){           
                          
            console.log(comments)
            var creator = require('../models/createDocx');
            var john = new creator(comments.name_project,comments);

            })


           res.render('page/send_form_5.ejs',{
               user: req.user,
               name_project:req.body.name_project
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
                    budget.find({},function(error, comments){   
                            infoShema.find({},function(error, comments2){        
                            budgetSpare= comments              
                            res.render(profilePage, {projectInfo:comments2, budget_info:budgetSpare , user: req.user }); 
                                });    
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
        
        infoShema.findOne({name_project: req.body.name_project}, function(err,obj) {

            res.render('page/project_view.ejs', { projectInfo:obj, user: req.user }); 
         });

       
            
      
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

    app.get('/AP001', isLoggedIn, function (req, res) {
        
        infoShema.find({},function(error, comments){           
            //console.log(comments.length)
            res.render('general_page/appoved_project.ejs', { projectInfo:comments, user: req.user });    
            }); 
    });
    app.post('/AP002', isLoggedIn, function (req, res) {
        
            console.log(req.body);
            res.render('general_page/step_one.ejs', { project_select:req.body,user: req.user });    
     
    });

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