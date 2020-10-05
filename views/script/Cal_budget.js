
// DEFINE 

var Total_budget = 0;

var all_person_budget = 0;
var person_budget_info = {};

var all_Compensation_budget = 0;
var Compensation_budget_info = {};

var all_Genaral_cost_budget = 0;
var Genaral_cost_budget_info = {};

var all_Material_cost_budget = 0;
var Material_cost_budget_info = {};

var all_Public_cost_budget = 0;
var Public_cost_budget_info = {};

var all_durable_articles_budget = 0;
var durable_articles_budget_info = {};

var all_Building_budget = 0;
var Building_budget_info = {};


var total_budget_cal = document.getElementById("total_budget")


document.getElementById("total_budget").value = (0*1).toLocaleString('en');


function updateTotoalBudget(){
 // Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
  alert(all_person_budget+"______"+all_Compensation_budget)
}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var close_2 = document.getElementsByClassName("close_2");
var close_3 = document.getElementsByClassName("close_3");
var close_4 = document.getElementsByClassName("close_4");
var close_5 = document.getElementsByClassName("close_5");
var close_6 = document.getElementsByClassName("close_6");
var close_7 = document.getElementsByClassName("close_7");

//------------------------------------------------------------------------------------    10.1.1      -------------

function add_person_budget(){
    var li = document.createElement("li");
    
    var person_budget_name = document.getElementById("person_budget_name").value;
    var person_budget_value = document.getElementById("person_budget_value").value;
    var person_budget_name_unit = document.getElementById("person_budget_unit").value;
    var person_budget_name_qt = document.getElementById("person_budget_qt").value;
    var person_budget_time = document.getElementById("person_time").value;

    var t = document.createTextNode(person_budget_time+" - "+person_budget_name+"(หน่วยละ "+(person_budget_value*1).toLocaleString('en')+" บาท)"+" จำนวน "+(person_budget_name_qt*1).toString()+" "+person_budget_name_unit+" รวมทั้งสิ้น "+(person_budget_value*1*(person_budget_name_qt*1)).toLocaleString('en') +" บาท");
    
    li.appendChild(t);
    all_person_budget = all_person_budget + ((person_budget_value*1)*(person_budget_name_qt*1));
    if (person_budget_value === '') {
        alert("กรุณาใส่รายละเอียด !");
    } else {
        Total_budget = Total_budget + ((person_budget_value*1)*(person_budget_name_qt*1));
        person_budget_info[person_budget_name+"_"+person_budget_value] = [person_budget_value*1,person_budget_name_qt*1,person_budget_name_unit,person_budget_time];
        document.getElementById("Person_List").appendChild(li);    
    }
    document.getElementById("person_budget_name").value = "";
    document.getElementById("person_budget_value").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = person_budget_name+"_"+person_budget_value.toString();
    span.appendChild(txt);
    li.appendChild(span);
    //updateTotoalBudget()
    total_budget_cal.value = (Total_budget*1).toLocaleString('en');
    document.getElementById("Person_List_data").value = JSON.stringify(person_budget_info);
   // alert(JSON.stringify(person_budget_info))
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
          addBudget_1(this)                 
        }
    }  
}

function addBudget_1(div){

            var ids = div.id   
            //alert(ids)  
            delete person_budget_info[ids]
            document.getElementById("Person_List_data").value = JSON.stringify(person_budget_info);          
            all_person_budget = 0;
            for (var key in person_budget_info) {
                all_person_budget = all_person_budget+ (person_budget_info[key][0] *person_budget_info[key][1] )
              } 
              //alert(all_person_budget)             
            Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
            total_budget_cal.value = (Total_budget*1).toLocaleString('en');
            div.parentElement.remove();
            
} 



//------------------------------------------------------------------------------------    10.2.1      -------------

function add_Compensation_budget(){
  var li = document.createElement("li");
  
  var Compensation_name = document.getElementById("Compensation_name").value;
  var Compensation_value = document.getElementById("Compensation_value").value;
  var Compensation_name_unit = document.getElementById("Compensation_name_unit").value;
  var Compensation_name_qt = document.getElementById("Compensation_name_qt").value;
  var Compensation_time = document.getElementById("Compensation_time").value;

  
  var t = document.createTextNode(Compensation_time+" - "+Compensation_name+"(หน่วยละ "+(Compensation_value*1).toLocaleString('en')+" บาท)"+"จำนวน "+(Compensation_name_qt*1).toString()+" "+Compensation_name_unit+" รวมทั้งสิ้น "+(Compensation_value*1*(Compensation_name_qt*1)).toLocaleString('en') +" บาท");
    
  
  
  li.appendChild(t);
  all_Compensation_budget = all_Compensation_budget + ((Compensation_value*1)*(Compensation_name_qt*1))
  
  if (Compensation_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
      Total_budget = Total_budget + ((Compensation_value*1)*(Compensation_name_qt*1));
      Compensation_budget_info[Compensation_name+"_"+Compensation_value] = [Compensation_value*1,Compensation_name_qt*1,Compensation_name_unit,Compensation_time];
      document.getElementById("Compensation_List").appendChild(li);    
  }
  document.getElementById("Compensation_name").value = "";
  document.getElementById("Compensation_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close_2";
  span.id = Compensation_name+"_"+Compensation_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
 
  total_budget_cal.value = (Total_budget*1).toLocaleString('en');
  document.getElementById("Compensation_List_data").value = JSON.stringify(Compensation_budget_info);
  //alert(close_2.length)
  for (i = 0; i < close_2.length; i++) {
    close_2[i].onclick = function() {
      addBudget_2(this)                 
      }
  }  
}

function addBudget_2(div){
        
         var ids = div.id    
         //alert(ids)
         //alert(JSON.stringify(Compensation_budget_info))
            delete Compensation_budget_info[ids]
            //alert(JSON.stringify(Compensation_budget_info))
            document.getElementById("Compensation_List_data").value = JSON.stringify(Compensation_budget_info);          
            all_Compensation_budget = 0;
            for (var key in Compensation_budget_info) {
              all_Compensation_budget = all_Compensation_budget+ (Compensation_budget_info[key][0] *Compensation_budget_info[key][1] )
              }              
            Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
            total_budget_cal.value = (Total_budget*1).toLocaleString('en');
            div.parentElement.remove();
            //updateTotoalBudget()
} 

//------------------------------------------------------------------------------------    10.2.2      -------------

function add_Genaral_cost_budget(){
  var li = document.createElement("li");
  
  var Genaral_cost_name = document.getElementById("Genaral_cost_budget_name").value;
  var Genaral_cost_value = document.getElementById("Genaral_cost_budget_value").value;
  var Genaral_cost_name_unit = document.getElementById("Genaral_cost_name_unit").value;
  var Genaral_cost_name_qt = document.getElementById("Genaral_cost_name_qt").value;
  var Genaral_cost_time = document.getElementById("Genaral_cost_time").value;

  
  var t = document.createTextNode(Genaral_cost_time+" - "+Genaral_cost_name+"(หน่วยละ "+(Genaral_cost_value*1).toLocaleString('en')+" บาท)"+"จำนวน "+(Genaral_cost_name_qt*1).toString()+" "+Genaral_cost_name_unit+" รวมทั้งสิ้น "+(Genaral_cost_value*1*(Genaral_cost_name_qt*1)).toLocaleString('en') +" บาท");
    
  Total_budget = Total_budget + ((Genaral_cost_value*1)*(Genaral_cost_name_qt*1));
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  all_Genaral_cost_budget = all_Genaral_cost_budget + ((Genaral_cost_value*1)*(Genaral_cost_name_qt*1))

  if (Genaral_cost_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    
    Genaral_cost_budget_info[Genaral_cost_name+"_"+Genaral_cost_value] = [Genaral_cost_value*1,Genaral_cost_name_qt*1,Genaral_cost_name_unit,Genaral_cost_time];
      document.getElementById("Genaral_cost_List").appendChild(li);    
  }
  document.getElementById("Genaral_cost_budget_name").value = "";
  document.getElementById("Genaral_cost_budget_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close_3";
  span.id = Genaral_cost_name+"_"+Genaral_cost_value.toString();
  
  span.appendChild(txt);
  li.appendChild(span);
  
  document.getElementById("Genaral_cost_List_data").value = JSON.stringify(Genaral_cost_budget_info);
  for (i = 0; i < close_3.length; i++) {
    close_3[i].onclick = function() {
        addBudget_3(this)                 
      }
  }  
}

function addBudget_3(div){
          //alert("อยู่่ในระหว่างการปรับปรุง")
          var ids = div.id   
         // alert(ids) 
          delete Genaral_cost_budget_info[ids]
         // alert(JSON.stringify(Genaral_cost_budget_info))   
          document.getElementById("Genaral_cost_List_data").value = JSON.stringify(Genaral_cost_budget_info);          
          all_Genaral_cost_budget = 0;
          for (var key in Genaral_cost_budget_info) {
            all_Genaral_cost_budget = all_Genaral_cost_budget+ (Genaral_cost_budget_info[key][0] *Genaral_cost_budget_info[key][1] )
            } 
                      
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
         // alert(all_person_budget+"-"+Total_budget) 
          total_budget_cal.value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
} 

//------------------------------------------------------------------------------------    10.2.3      -------------

function add_Material_cost_budget(){
  var li = document.createElement("li");
  
  var Material_cost_name = document.getElementById("Material_cost_budget_name").value;
  var Material_cost_value = document.getElementById("Material_cost_budget_value").value;
  var  Material_cost_name_unit = document.getElementById("Material_cost_name_unit").value;
  var  Material_cost_name_qt = document.getElementById("Material_cost_name_qt").value;
  var Material_cost_time = document.getElementById("Material_cost_time").value;

  
  var t = document.createTextNode(Material_cost_time+" - "+ Material_cost_name+"(หน่วยละ "+( Material_cost_value*1).toLocaleString('en')+" บาท)"+"จำนวน "+( Material_cost_name_qt*1).toString()+" "+ Material_cost_name_unit+" รวมทั้งสิ้น "+( Material_cost_value*1*( Material_cost_name_qt*1)).toLocaleString('en') +" บาท");
    

  Total_budget = Total_budget + (( Material_cost_value*1)*( Material_cost_name_qt*1));
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  all_Material_cost_budget = all_Material_cost_budget + ((Material_cost_value*1)*(Material_cost_name_qt*1))
  
  if ( Material_cost_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
     Material_cost_budget_info[ Material_cost_name+"_"+ Material_cost_value] = [ Material_cost_value*1, Material_cost_name_qt*1, Material_cost_name_unit,Material_cost_time];
      document.getElementById("Material_cost_List").appendChild(li);    
  }
  document.getElementById("Material_cost_budget_name").value = "";
  document.getElementById("Material_cost_budget_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close_4";
  span.id = Material_cost_name+"_"+Material_cost_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
  
  document.getElementById("Material_cost_List_data").value = JSON.stringify(Material_cost_budget_info);
  for (i = 0; i < close_4.length; i++) {
    close_4[i].onclick = function() {
        addBudget_4(this)                 
      }
  }  
}

function addBudget_4(div){
         //alert("อยู่่ในระหว่างการปรับปรุง")
         var ids = div.id   
         // alert(ids) 
          delete Material_cost_budget_info[ids]
         // alert(JSON.stringify(Genaral_cost_budget_info))   
          document.getElementById("Material_cost_List_data").value = JSON.stringify(Material_cost_budget_info);          
          all_Material_cost_budget = 0;
          for (var key in Material_cost_budget_info) {
            all_Material_cost_budget = all_Material_cost_budget+ (Material_cost_budget_info[key][0] *Material_cost_budget_info[key][1] )
            } 
                      
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
         // alert(all_person_budget+"-"+Total_budget) 
          total_budget_cal.value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
} 

//------------------------------------------------------------------------------------    10.2.4      -------------

function add_Public_cost_budget(){
  var li = document.createElement("li");
  
  var Public_cost_name = document.getElementById("Public_cost_name").value;
  var Public_cost_value = document.getElementById("Public_cost_value").value;  
  var  Public_cost_name_unit = document.getElementById("Public_cost_name_unit").value;
  var  Public_cost_name_qt = document.getElementById("Public_cost_name_qt").value;
  var Public_cost_time = document.getElementById("Public_cost_time").value;
  
  var t = document.createTextNode( Public_cost_time+" - "+Public_cost_name+"(หน่วยละ "+( Public_cost_value*1).toLocaleString('en')+" บาท)"+"จำนวน "+( Public_cost_name_qt*1).toString()+" "+ Public_cost_name_unit+" รวมทั้งสิ้น "+( Public_cost_value*1*( Public_cost_name_qt*1)).toLocaleString('en') +" บาท");
  
  
  Total_budget = Total_budget + (( Public_cost_value*1)*( Public_cost_name_qt*1));
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  all_Public_cost_budget = all_Public_cost_budget + ((Public_cost_value*1)*(Public_cost_name_qt*1))
  
  if (Public_cost_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    Public_cost_budget_info[ Public_cost_name+"_"+ Public_cost_value] = [ Public_cost_value*1, Public_cost_name_qt*1, Public_cost_name_unit,Public_cost_time];
      document.getElementById("Public_cost_List").appendChild(li);    
  }
  document.getElementById("Public_cost_name").value = "";
  document.getElementById("Public_cost_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = Public_cost_name+"_"+Public_cost_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
  document.getElementById("Public_cost_List_data").value = JSON.stringify(Public_cost_budget_info);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        addBudget_5(this)                 
      }
  }  
}

function addBudget_5(div){
        //alert("อยู่่ในระหว่างการปรับปรุง")
        var ids = div.id   
        // alert(ids) 
         delete Public_cost_budget_info[ids]
        // alert(JSON.stringify(Genaral_cost_budget_info))   
         document.getElementById("Public_cost_List_data").value = JSON.stringify(Public_cost_budget_info);          
         all_Public_cost_budget = 0;
         for (var key in Public_cost_budget_info) {
          all_Public_cost_budget = all_Public_cost_budget+ (Public_cost_budget_info[key][0] *Public_cost_budget_info[key][1] )
           } 
                     
         Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
        // alert(all_person_budget+"-"+Total_budget) 
         total_budget_cal.value = (Total_budget*1).toLocaleString('en');
         div.parentElement.remove();
} 

//------------------------------------------------------------------------------------    10.2.4      -------------

function add_durable_articles_budget(){
  var li = document.createElement("li");
  
  var durable_articles_name = document.getElementById("durable_articles_name").value;
  var durable_articles_value = document.getElementById("durable_articles_value").value;
  var durable_articles_name_unit = document.getElementById("durable_articles_name_unit").value;
  var durable_articles_name_qt = document.getElementById("durable_articles_name_qt").value;
  var durable_articles_time = document.getElementById("durable_articles_time").value;

  
  var t = document.createTextNode(durable_articles_time+" - "+durable_articles_name+"(หน่วยละ "+(durable_articles_value*1).toLocaleString('en')+" บาท)"+"จำนวน "+(durable_articles_name_qt*1).toString()+" "+durable_articles_name_unit+" รวมทั้งสิ้น "+(durable_articles_value*1*(durable_articles_name_qt*1)).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + ((durable_articles_value*1)*(durable_articles_name_qt*1));
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  all_durable_articles_budget = all_durable_articles_budget + ((durable_articles_value*1)*(durable_articles_name_qt*1))
  
  if (durable_articles_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
   durable_articles_budget_info[durable_articles_name+"_"+durable_articles_value] = [durable_articles_value*1,durable_articles_name_qt*1,durable_articles_name_unit,durable_articles_time];
      document.getElementById("durable_articles_List").appendChild(li);    
  }
  document.getElementById("durable_articles_name").value = "";
  document.getElementById("durable_articles_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = durable_articles_name+"_"+durable_articles_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
  
  document.getElementById("durable_articles_List_data").value = JSON.stringify(durable_articles_budget_info);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        addBudget_6(this)                 
      }
  }  
}

function addBudget_6(div){
        //alert("อยู่่ในระหว่างการปรับปรุง")
        var ids = div.id   
        // alert(ids) 
         delete durable_articles_budget_info[ids]
        // alert(JSON.stringify(Genaral_cost_budget_info))   
         document.getElementById("durable_articles_List_data").value = JSON.stringify(durable_articles_budget_info);          
         all_durable_articles_budget = 0;
         for (var key in durable_articles_budget_info) {
          all_durable_articles_budget = all_durable_articles_budget+ (durable_articles_budget_info[key][0] *durable_articles_budget_info[key][1] )
           } 
                     
         Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
        // alert(all_person_budget+"-"+Total_budget) 
         total_budget_cal.value = (Total_budget*1).toLocaleString('en');
         div.parentElement.remove();
} 

//------------------------------------------------------------------------------------    10.2.4      -------------

function add_Building_budget(){
  var li = document.createElement("li");
  
  var Building_name = document.getElementById("Building_name").value;
  var Building_value = document.getElementById("Building_value").value; 
  var Building_name_unit = document.getElementById("Building_name_unit").value;
  var Building_name_qt = document.getElementById("Building_name_qt").value;
  var Building_time = document.getElementById("Building_time").value;

  
  var t = document.createTextNode(Building_time+" - "+Building_name+"(หน่วยละ "+(Building_value*1).toLocaleString('en')+" บาท)"+"จำนวน "+(Building_name_qt*1).toString()+" "+Building_name_unit+" รวมทั้งสิ้น "+(Building_value*1*(Building_name_qt*1)).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + ((Building_value*1)*(Building_name_qt*1));
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  all_Building_budget = all_Building_budget + ((Building_value*1)*(Building_name_qt*1))
  
  if (Building_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    Building_budget_info[Building_name+"_"+Building_value] = [Building_value*1,Building_name_qt*1,Building_name_unit,Building_time];
      document.getElementById("Building_List").appendChild(li);    
  }
  document.getElementById("Building_name").value = "";
  document.getElementById("Building_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = Building_name+"_"+Building_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
  
  document.getElementById("Building_List_data").value = JSON.stringify(Building_budget_info);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        addBudget_7(this)                 
      }
  }  
}

function addBudget_7(div){
        //alert("อยู่่ในระหว่างการปรับปรุง")
        var ids = div.id   
        // alert(ids) 
         delete Building_budget_info[ids]
        // alert(JSON.stringify(Genaral_cost_budget_info))   
         document.getElementById("Building_List_data").value = JSON.stringify(Building_budget_info);          
         all_Building_budget = 0;
         for (var key in Building_budget_info) {
          all_Building_budget = all_Building_budget+ (Building_budget_info[key][0] *Building_budget_info[key][1] )
           } 
                     
         Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
        // alert(all_person_budget+"-"+Total_budget) 
         total_budget_cal.value = (Total_budget*1).toLocaleString('en');
         div.parentElement.remove();
} 