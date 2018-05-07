
// --- Date Picker
$(document).ready(function(){ 
  var date1 = '25/02/1985';  
  var date2 = '26/02/1985';  
  if ($.datepicker.parseDate('dd/mm/yy', date2) > $.datepicker.parseDate('dd/mm/yy', date1)) {
         alert(date2 + 'is later than ' + date1);
  }
});


function main(){
  if(comp.checked == true && inv.checked ==true && deal.checked == true){
  
}
else if(comp.checked == true && inv.checked ==true && deal.checked == false){

}
else if(comp.checked == true && inv.checked ==false && deal.checked == true){

}
else if(comp.checked == false && inv.checked ==true && deal.checked == true){

}
else if(comp.checked == true && inv.checked ==false && deal.checked == false){

}
else if(comp.checked == false && inv.checked ==true && deal.checked == false){

}
else if(comp.checked == false && inv.checked ==false && deal.checked == true){

}
else if(comp.checked == false && inv.checked ==false && deal.checked == false){

}
}



//------------>>>>>>> OG
//Company Table
function companies(){

  //var comp = document.getElementById('companies');

  //if (comp.checked){
 $(document).ready(function(){
  $.getJSON('JSON/companies.json', function(data){
   var table_data='';
   table_data += '<tr>';
   table_data += '<th colspan="3">Company Data</th>';
   table_data += '</tr>';
   table_data += '<tr>';
   table_data += '<th>Asset Value</th>';
   table_data += '<th>Date</th>';
   table_data += '<th>Company</th>';
   table_data += '</tr>';
   $.each(data, function(key,value){
    table_data+='<tr>';
    table_data+='<td>'+ value.assetvalue+ '</td>';
    table_data+='<td>'+ value.date+ '</td>';
    table_data+='<td>'+ value.company+ '</td>';
    table_data+='</tr>';
   });
   $('#comp_table').append(table_data);
  });
 });
//}
}

//Investor Table
function investors()
{

  //var inv = document.getElementById('investors');
  //if (inv.checked){

  $(document).ready(function(){
  $.getJSON('JSON/investors.json', function(data){
   var table_data='';
   table_data += '<tr>';
   table_data += '<th colspan="3">Investor Data</th>';
   table_data += '</tr>';
   table_data += '<tr>';
   table_data += '<th>Asset Value</th>';
   table_data += '<th>Date</th>';
   table_data += '<th>Name</th>';
   table_data += '</tr>';
   $.each(data, function(key,value){
    table_data+='<tr>';
    table_data+='<td>'+ value.assetvalue+ '</td>';
    table_data+='<td>'+ value.date+ '</td>';
    table_data+='<td>'+ value.name+ '</td>';
    table_data+='</tr>';
   });
   $('#inv_table').append(table_data);
  });
 });
//}
}


//Deals Table

function deals(){

  //var deal = document.getElementById('deals');
  //if(deal.checked){
 $(document).ready(function(){
  $.getJSON('JSON/deals.json', function(data){
   var table_data='';
   table_data += '<tr>';
   table_data += '<th colspan="3">Deals Data</th>';
   table_data += '</tr>';
   table_data += '<tr>';
   table_data += '<th>Asset Value</th>';
   table_data += '<th>Date</th>';
   table_data += '<th>Deal Id</th>';
   table_data += '</tr>';
   $.each(data, function(key,value){
    table_data+='<tr>';
    table_data+='<td>'+ value.assetvalue+ '</td>';
    table_data+='<td>'+ value.date+ '</td>';
    table_data+='<td>'+ value.DealId+ '</td>';
    table_data+='</tr>';
   });
   $('#deal_table').append(table_data);
  });
 });
//}
}

// ----------------------------------------------------


function check()
{
  var ass = [];
  var inv = document.getElementById('investors');
  if (inv.checked){

  $(document).ready(function(){
  $.getJSON('JSON/investors.json', function(data){
   var table_data=[];
   $.each(data, function(key,value){
    if(value.assetvalue < 400000)
    {
      table_data.push('<tr><td>' + value.name + '</td><td>' + value.assetvalue + '</td></tr>');
    }
   });
   for (let index = 0; index < table_data.length; index++) {
    $('#inv_table').append(table_data[index]);
    
  }
  });
 });
}
}