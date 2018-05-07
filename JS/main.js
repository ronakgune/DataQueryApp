$(document).ready(function() {
  //$('#fullpage').fullpage();
  var x = document.getElementById("myDIV");
  x.style.display = "none";
});

function main() {
  var comp = document.getElementById('companies');
  var inv = document.getElementById('investors');
  var deal = document.getElementById('deals');
  //Asset Select
  var a = document.getElementById("asset_check");
  var assetIndex = a.selectedIndex;
  //Date Select
  var n = document.getElementById("date_check");
  var dateIndex = n.selectedIndex;
  // Asset Value
  var assetVal = document.getElementById('asset_value').value;
  // Date Value
  var textValue = document.getElementById('datepicker').value;
  //--0
  if (assetIndex == 0) {
      // 00
      if (dateIndex == 0) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      }


      // --- 01
      else if (dateIndex == 1) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      }

      // ____________________TO DO ______________

      // ---- 02
      else if (dateIndex == 2) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  console.log(textValue);
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }


      }
      // ------ 03
      else if (dateIndex == 3) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  console.log(textValue);
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      } else if (dateIndex == 4) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  console.log(textValue);
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }
  }

  //--1
  else if (assetIndex == 1) {

      // ------ 10
      if (dateIndex == 0) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }


      }

      // ---- 11
      else if (dateIndex == 1) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.company + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.name + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          table_data += '<tr>';
                          table_data += '<td>' + value.DealId + '</td>';
                          table_data += '<td>' + value.assetvalue + '</td>';
                          table_data += '<td>' + value.date + '</td>';
                          table_data += '</tr>';
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }


      }

      // ------- 12
      else if (dateIndex == 2) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  console.log(textValue);
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }


      // -------- 13
      else if (dateIndex == 3) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  console.log(textValue);
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      } else if (dateIndex == 4) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  console.log(textValue);
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if ($.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }
  }
  //---------2
  else if (assetIndex == 2)
  //------ 20
  {
      if (dateIndex == 0) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      }
      // ------ 21
      else if (dateIndex == 1) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }




      //------- 22
      else if (dateIndex == 2) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }




      // ---------- 23
      else if (dateIndex == 3) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }

      // ------ 24 ----
      else if (dateIndex == 4) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue > assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }
  }
  //--3
  else if (assetIndex == 3) {
      // -----30
      if (dateIndex == 0) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      }
      // -----31
      else if (dateIndex == 1) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }




      // ---------32
      else if (dateIndex == 2) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';

                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      }
      // -----33
      else if (dateIndex == 3) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }


      // ------ 34 ------
      else if (dateIndex == 4) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue == assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }
  }
  //--4
  else if (assetIndex == 4) {




      //--------40 
      if (dateIndex == 0) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }


      //-------------41
      else if (dateIndex == 1) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }
      //--------42
      else if (dateIndex == 2) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) > $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }
      //--------43
      else if (dateIndex == 3) {

          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date) < $.datepicker.parseDate('dd/mm/yy', textValue)) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }
      }


      // ------- 44 -------
      else if (dateIndex == 4) {
          if (comp.checked == true && inv.checked == true && deal.checked == true) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == true && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == true && inv.checked == false && deal.checked == true) {
              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == false && inv.checked == true && deal.checked == true) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });

          } else if (comp.checked == true && inv.checked == false && deal.checked == false) {

              //-- comp
              $(document).ready(function() {
                  $.getJSON('JSON/companies.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Company Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Company</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.company + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#comp_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == true && deal.checked == false) {

              //-- inv

              $(document).ready(function() {
                  $.getJSON('JSON/investors.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Investor Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Name</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.name + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#inv_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == true) {

              //--- deals

              $(document).ready(function() {
                  $.getJSON('JSON/deals.json', function(data) {
                      var table_data = '';
                      table_data += '<tr>';
                      table_data += '<th colspan="3">Deals Data</th>';
                      table_data += '</tr>';
                      table_data += '<tr>';
                      table_data += '<th>Deal Id</th>';
                      table_data += '<th>Asset Value</th>';
                      table_data += '<th>Date</th>';
                      table_data += '</tr>';
                      $.each(data, function(key, value) {
                          if (value.assetvalue < assetVal && $.datepicker.parseDate('dd/mm/yy', value.date).getTime() == $.datepicker.parseDate('dd/mm/yy', textValue).getTime()) {
                              table_data += '<tr>';
                              table_data += '<td>' + value.DealId + '</td>';
                              table_data += '<td>' + value.assetvalue + '</td>';
                              table_data += '<td>' + value.date + '</td>';
                              table_data += '</tr>';
                          }
                      });
                      $('#deal_table').append(table_data);
                  });
              });
          } else if (comp.checked == false && inv.checked == false && deal.checked == false) {

              alert('Please choose at least one table');
          }

      }
  }
}

function min() {
  $(document).ready(function() {
      $.getJSON('JSON/companies.json', function(data) {
          var table_data = '';
          table_data += '<tr>';
          table_data += '<th colspan="3">Company Data</th>';
          table_data += '</tr>';
          table_data += '<tr>';
          table_data += '<th>Company</th>';
          table_data += '<th>Asset Value</th>';
          table_data += '<th>Date</th>';
          table_data += '</tr>';
          var min = [];
          var minValue = '';
          $.each(data, function(key, value) {
              min.push(value.assetvalue);
          });
          var minValue = Math.min.apply(Math, min);
          $.each(data, function(key, value) {
              if (minValue == value.assetvalue) {
                  table_data += '<tr>';
                  table_data += '<td>' + value.company + '</td>';
                  table_data += '<td>' + value.assetvalue + '</td>';
                  table_data += '<td>' + value.date + '</td>';
                  table_data += '</tr>';
              }
          });

          $('#comp_table').append(table_data);
      });
  });



  $(document).ready(function() {
      $.getJSON('JSON/investors.json', function(data) {
          var table_data = '';
          table_data += '<tr>';
          table_data += '<th colspan="3">Investor Data</th>';
          table_data += '</tr>';
          table_data += '<tr>';
          table_data += '<th>Name</th>';
          table_data += '<th>Asset Value</th>';
          table_data += '<th>Date</th>';
          table_data += '</tr>';
          var min = [];
          var minValue = '';
          $.each(data, function(key, value) {
              min.push(value.assetvalue);
          });
          var minValue = Math.min.apply(Math, min);
          $.each(data, function(key, value) {
              if (minValue == value.assetvalue) {
                  table_data += '<tr>';
                  table_data += '<td>' + value.name + '</td>';
                  table_data += '<td>' + value.assetvalue + '</td>';
                  table_data += '<td>' + value.date + '</td>';
                  table_data += '</tr>';
              }
          });
          $('#inv_table').append(table_data);
      });
  });

  $(document).ready(function() {
      $.getJSON('JSON/deals.json', function(data) {
          var table_data = '';
          table_data += '<tr>';
          table_data += '<th colspan="3">Deals Data</th>';
          table_data += '</tr>';
          table_data += '<tr>';
          table_data += '<th>Deal Id</th>';
          table_data += '<th>Asset Value</th>';
          table_data += '<th>Date</th>';
          table_data += '</tr>';
          var min = [];
          var minValue = '';
          $.each(data, function(key, value) {
              min.push(value.assetvalue);
          });
          var minValue = Math.min.apply(Math, min);
          $.each(data, function(key, value) {
              if (minValue == value.assetvalue) {
                  table_data += '<tr>';
                  table_data += '<td>' + value.DealId + '</td>';
                  table_data += '<td>' + value.assetvalue + '</td>';
                  table_data += '<td>' + value.date + '</td>';
                  table_data += '</tr>';
              }
          });
          $('#deal_table').append(table_data);
      });
  });
}

function max() {
  $(document).ready(function() {
      $.getJSON('JSON/companies.json', function(data) {
          var table_data = '';
          table_data += '<tr>';
          table_data += '<th colspan="3">Company Data</th>';
          table_data += '</tr>';
          table_data += '<tr>';
          table_data += '<th>Company</th>';
          table_data += '<th>Asset Value</th>';
          table_data += '<th>Date</th>';
          table_data += '</tr>';
          var min = [];
          var minValue = '';
          $.each(data, function(key, value) {
              min.push(value.assetvalue);
          });
          var minValue = Math.max.apply(Math, min);
          $.each(data, function(key, value) {
              if (minValue == value.assetvalue) {
                  table_data += '<tr>';
                  table_data += '<td>' + value.company + '</td>';
                  table_data += '<td>' + value.assetvalue + '</td>';
                  table_data += '<td>' + value.date + '</td>';
                  table_data += '</tr>';
              }
          });

          $('#comp_table').append(table_data);
      });
  });



  $(document).ready(function() {
      $.getJSON('JSON/investors.json', function(data) {
          var table_data = '';
          table_data += '<tr>';
          table_data += '<th colspan="3">Investor Data</th>';
          table_data += '</tr>';
          table_data += '<tr>';
          table_data += '<th>Name</th>';
          table_data += '<th>Asset Value</th>';
          table_data += '<th>Date</th>';
          table_data += '</tr>';
          var min = [];
          var minValue = '';
          $.each(data, function(key, value) {
              min.push(value.assetvalue);
          });
          var minValue = Math.max.apply(Math, min);
          $.each(data, function(key, value) {
              if (minValue == value.assetvalue) {
                  table_data += '<tr>';
                  table_data += '<td>' + value.name + '</td>';
                  table_data += '<td>' + value.assetvalue + '</td>';
                  table_data += '<td>' + value.date + '</td>';
                  table_data += '</tr>';
              }
          });
          $('#inv_table').append(table_data);
      });
  });

  $(document).ready(function() {
      $.getJSON('JSON/deals.json', function(data) {
          var table_data = '';
          table_data += '<tr>';
          table_data += '<th colspan="3">Deals Data</th>';
          table_data += '</tr>';
          table_data += '<tr>';
          table_data += '<th>Deal Id</th>';
          table_data += '<th>Asset Value</th>';
          table_data += '<th>Date</th>';
          table_data += '</tr>';
          var min = [];
          var minValue = '';
          $.each(data, function(key, value) {
              min.push(value.assetvalue);
          });
          var minValue = Math.max.apply(Math, min);
          $.each(data, function(key, value) {
              if (minValue == value.assetvalue) {
                  table_data += '<tr>';
                  table_data += '<td>' + value.DealId + '</td>';
                  table_data += '<td>' + value.assetvalue + '</td>';
                  table_data += '<td>' + value.date + '</td>';
                  table_data += '</tr>';
              }
          });
          $('#deal_table').append(table_data);
      });
  });

}


// Toggle display
/*
var toggled = true,
div1 = document.getElementById("newpost"),
div2 = document.getElementById("NewProfile"),
function toggle() {
    if( toggled ) {
       div1.style.display = "block";
       div2.style.display = "none";
    } else {
       div1.style.display = "none";
       div2.style.display = "block";
    }
    toggled = !toggled;
};
*/