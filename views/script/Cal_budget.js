
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


//------------------------------------------------------------------------------------    10.1.1      -------------

function add_person_budget(){
    var li = document.createElement("li");
    
    var person_budget_name = document.getElementById("person_budget_name").value;
    var person_budget_value = document.getElementById("person_budget_value").value;
    var t = document.createTextNode(person_budget_name+" "+(person_budget_value*1).toLocaleString('en') +" บาท");
    
    
    
    
    li.appendChild(t);
    all_person_budget = all_person_budget + person_budget_value*1;
    if (person_budget_value === '') {
        alert("กรุณาใส่รายละเอียด !");
    } else {
        Total_budget = Total_budget + person_budget_value*1;
        person_budget_info[person_budget_name+"_"+person_budget_value] = person_budget_value*1;
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
  alert("อยู่่ในระหว่างการปรับปรุง")
  /*
            var ids = div.id    
            alert("Delete 1")
            person_budget_info[ids] = 0;           
            all_person_budget = 0;
            for (var key in person_budget_info) {
                all_person_budget = all_person_budget+ person_budget_info[key] 
              }
              
            Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
            total_budget_cal.value = (Total_budget*1).toLocaleString('en');
            div.parentElement.remove();
            */
} 



//------------------------------------------------------------------------------------    10.2.1      -------------

function add_Compensation_budget(){
  var li = document.createElement("li");
  
  var Compensation_name = document.getElementById("Compensation_name").value;
  var Compensation_value = document.getElementById("Compensation_value").value;
  var t = document.createTextNode(Compensation_name+" "+(Compensation_value*1).toLocaleString('en') +" บาท");
  
  
  
  
  li.appendChild(t);
  all_Compensation_budget = all_Compensation_budget + Compensation_value*1
  
  if (Compensation_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
      Total_budget = Total_budget + Compensation_value*1;
      Compensation_budget_info[Compensation_name+"_"+Compensation_value] = Compensation_value*1;
      document.getElementById("Compensation_List").appendChild(li);    
  }
  document.getElementById("Compensation_name").value = "";
  document.getElementById("Compensation_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = Compensation_name+"_"+Compensation_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
 
  total_budget_cal.value = (Total_budget*1).toLocaleString('en');
  document.getElementById("Compensation_List_data").value = JSON.stringify(Compensation_budget_info);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      addBudget_2(this)                 
      }
  }  
}

function addBudget_2(div){
         alert("อยู่่ในระหว่างการปรับปรุง")
         /*
          var ids = div.id      
          Compensation_budget_info[ids] = 0;           
          all_Compensation_budget = 0;
          for (var key in Compensation_budget_info) {
            all_Compensation_budget = all_Compensation_budget+ Compensation_budget_info[key] 
            }
            
         Total_budget =  all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
         total_budget_cal.value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
          */
} 

//------------------------------------------------------------------------------------    10.2.2      -------------

function add_Genaral_cost_budget(){
  var li = document.createElement("li");
  
  var Genaral_cost_budget_name = document.getElementById("Genaral_cost_budget_name").value;
  var Genaral_cost_budget_value = document.getElementById("Genaral_cost_budget_value").value;
  var t = document.createTextNode(Genaral_cost_budget_name+" "+(Genaral_cost_budget_value*1).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + Genaral_cost_budget_value*1;
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  
  if (Genaral_cost_budget_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
      Genaral_cost_budget_info[Genaral_cost_budget_name+"_"+Genaral_cost_budget_value] = Genaral_cost_budget_value*1;
      document.getElementById("Genaral_cost_List").appendChild(li);    
  }
  document.getElementById("Genaral_cost_budget_name").value = "";
  document.getElementById("Genaral_cost_budget_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = Genaral_cost_budget_name+"_"+Genaral_cost_budget_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
  
  document.getElementById("Genaral_cost_List_data").value = JSON.stringify(Genaral_cost_budget_info);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        addBudget_3(this)                 
      }
  }  
}

function addBudget_3(div){
          alert("อยู่่ในระหว่างการปรับปรุง")
          /*
          var ids = div.id
          Genaral_cost_budget_info[ids] = 0;           
          all_Genaral_cost_budget = 0;
          for (var key in Genaral_cost_budget_info) {
              all_Genaral_cost_budget = all_Genaral_cost_budget+ Genaral_cost_budget_info[key] 
            }
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
          document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
          */
} 

//------------------------------------------------------------------------------------    10.2.3      -------------

function add_Material_cost_budget(){
  var li = document.createElement("li");
  
  var Material_cost_budget_name = document.getElementById("Material_cost_budget_name").value;
  var Material_cost_budget_value = document.getElementById("Material_cost_budget_value").value;
  var t = document.createTextNode(Material_cost_budget_name+" "+(Material_cost_budget_value*1).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + Material_cost_budget_value*1;
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  
  if (Genaral_cost_budget_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    Material_cost_budget_info[Material_cost_budget_name+"_"+Material_cost_budget_value] = Material_cost_budget_value*1;
      document.getElementById("Material_cost_List").appendChild(li);    
  }
  document.getElementById("Material_cost_budget_name").value = "";
  document.getElementById("Material_cost_budget_value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = Material_cost_budget_name+"_"+Material_cost_budget_value.toString();
  span.appendChild(txt);
  li.appendChild(span);
  
  document.getElementById("Material_cost_List_data").value = JSON.stringify(Material_cost_budget_info);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        addBudget_4(this)                 
      }
  }  
}

function addBudget_4(div){
        alert("อยู่่ในระหว่างการปรับปรุง")
        /*
          var ids = div.id
          Material_cost_budget_info[ids] = 0;           
          all_Material_cost_budget = 0;
          for (var key in Material_cost_budget_info) {
              all_Material_cost_budget = all_Material_cost_budget+ Material_cost_budget_info[key] 
            }
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
          document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
          */
} 

//------------------------------------------------------------------------------------    10.2.4      -------------

function add_Public_cost_budget(){
  var li = document.createElement("li");
  
  var Public_cost_name = document.getElementById("Public_cost_name").value;
  var Public_cost_value = document.getElementById("Public_cost_value").value;
  var t = document.createTextNode(Public_cost_name+" "+(Public_cost_value*1).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + Public_cost_value*1;
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  
  if (Public_cost_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    Public_cost_budget_info[Public_cost_name+"_"+Public_cost_value] = Public_cost_value*1;
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
        addBudget_4(this)                 
      }
  }  
}

function addBudget_4(div){
        alert("อยู่่ในระหว่างการปรับปรุง")
        /*
          var ids = div.id
          Public_cost_budget_info[ids] = 0;           
          all_Public_cost_budget = 0;
          for (var key in Public_cost_budget_info) {
              all_Public_cost_budget = all_Public_cost_budget+ Public_cost_budget_info[key] 
            }
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
          document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
          */
} 

//------------------------------------------------------------------------------------    10.2.4      -------------

function add_durable_articles_budget(){
  var li = document.createElement("li");
  
  var durable_articles_name = document.getElementById("durable_articles_name").value;
  var durable_articles_value = document.getElementById("durable_articles_value").value;
  var t = document.createTextNode(durable_articles_name+" "+(durable_articles_value*1).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + durable_articles_value*1;
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  
  if (durable_articles_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    durable_articles_budget_info[durable_articles_name+"_"+durable_articles_value] = durable_articles_value*1;
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
        addBudget_4(this)                 
      }
  }  
}

function addBudget_4(div){
        alert("อยู่่ในระหว่างการปรับปรุง")
        /*
          var ids = div.id
          durable_articles_budget_info[ids] = 0;           
          all_durable_articles_budget = 0;
          for (var key in durable_articles_budget_info) {
              all_durable_articles_budget = all_durable_articles_budget+ durable_articles_budget_info[key] 
            }
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
          document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
          */
} 

//------------------------------------------------------------------------------------    10.2.4      -------------

function add_Building_budget(){
  var li = document.createElement("li");
  
  var Building_name = document.getElementById("Building_name").value;
  var Building_value = document.getElementById("Building_value").value;
  var t = document.createTextNode(Building_name+" "+(Building_value*1).toLocaleString('en') +" บาท");
  
  Total_budget = Total_budget + Building_value*1;
  document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
  
  li.appendChild(t);
  
  if (Building_value === '') {
      alert("กรุณาใส่รายละเอียด !");
  } else {
    Building_budget_info[Building_name+"_"+Building_value] = Building_value*1;
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
        addBudget_4(this)                 
      }
  }  
}

function addBudget_4(div){
        alert("อยู่่ในระหว่างการปรับปรุง")
        /*
          var ids = div.id
          Building_budget_info[ids] = 0;           
          all_Building_budget = 0;
          for (var key in Building_budget_info) {
              all_Building_budget = all_Building_budget+ Building_budget_info[key] 
            }
          Total_budget = all_person_budget + all_Compensation_budget +all_Genaral_cost_budget + all_Material_cost_budget + all_Public_cost_budget + all_durable_articles_budget + all_Building_budget;
          document.getElementById("total_budget").value = (Total_budget*1).toLocaleString('en');
          div.parentElement.remove();
          */
} 