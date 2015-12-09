//  function to enable the respective gender with respect to the selected title
function selected() {
var genderArray = ["Mr." , "Miss" , "Mrs." , "Dr."];
var gender = $("#gender option:selected").html();
if (gender === genderArray[0]) {
  $("#male").removeAttr("disabled" , "disabled");
  $("#male").attr("checked","checked");
  $("#female").attr("disabled" , "disabled");
  $("#none").attr("disabled" , "disabled");
} else if (gender === genderArray[2] || gender === genderArray[1]) {
    $("#female").removeAttr("disabled" , "disabled");
    $("#female").attr("checked","checked");
    $("#male").attr("disabled" , "disabled");
    $("#none").attr("disabled" , "disabled");
  } else if (gender === genderArray[3]) {
      $("#male").removeAttr("disabled" , "disabled");
      $("#female").removeAttr("disabled" , "disabled");
      $("#none").attr("disabled" , "disabled");
      $("#female").removeAttr("checked" , "checked");
      $("#male").removeAttr("checked" , "checked");
    } else {
        $("#none").removeAttr("disabled" , "disabled");
        $("#none").attr("checked","checked");
        $("#male").attr("disabled" , "disabled");
        $("#female").attr("disabled" , "disabled");
      }
}
//function to show a alertbox to fill the title if we moved to next field
function selectTitle() {
  if ($("#gender option:selected").html() === "") {
    $("#selectTitleAlert").show();//to show the alert
  } else {
      $("#gender").attr("class" , "input");
      $("#selectTitleAlert").hide();//if field is filled to hide the alert
    }
}
//function to show alert messages to fill the previous mandatory fields
function firstName() {
  if ($("#firstName").val() === "") {
    $("#firstName").addClass("input input--alert");//to highlight the emptyfield
    $("#firstNameAlert").show();
    selectTitle();
  } else {
      $("#firstName").attr("class" , "input");
      $("#firstNameAlert").hide();//to hide alert if the field is filled
    }
}
//function to show alerts to fill the previous mandatory fields
function lastName() {
  if ($("#lastName").val() === "") {
    $("#lastName").addClass("input input--alert");
    $("#lastNameAlert").show();//alert
    firstName();
  } else {
      $("#lastName").attr("class" , "input");
      $("#lastNameAlert").hide();//hiding of alert
    }
}
//function to show alerts to fill the previous mandatory fields
function dateOfBirth() {
  if ($("#dateOfBirth").val() === "") {
    $("#dateOfBirth").addClass("input input--alert");
    $("#dateOfBirthAlert").show();//alert showing
    lastName();
  } else {
      $("#dateOfBirth").attr("class" , "input");
      $("#dateOfBirthAlert").hide();//hiding alert
    }
}
//function to check a whether the given number is valid ten digited number or not
function mobile() {
  var number = $("#mobileNo").val();
  var x = isNaN(number)?true:false;
  if (number.length > 10 || number.length < 10 || x === true) {
    $("#correctMobileNoAlert").show();
    $("#mobileNoAlert").hide();
    $("#mobileNo").addClass("input input--alert");//to show alert
  } else {
      $("#mobileNo").attr("class" , "input");
      $("#correctMobileNoAlert").hide();
      $("#mobileNoAlert").hide();//to hide alert once the field is filled
    }
}
//function to show alerts to fill the previous mandatory fields
function mobileNo() {
  if ($("#mobileNo").val() === "") {
    $("#mobileNo").addClass("input input--alert");
    $("#mobileNoAlert").show();
    dateOfBirth();
  } else {
    $("#mobileNo").attr("class" , "input input--alert");
    $("#mobileNoAlert").hide();
    $("#correctMobileNoAlert").hide();
    }
}
//function to check whether a given email is valid or not
function email() {
  var validEmail = $("#email").val();
  var length = validEmail.length;
  if (email) {
    var firstCheck = (validEmail.indexOf('@') >= 0)?true:false;//to check whether email has the fields of @ and .com
    var secondCheck = (validEmail.indexOf('.com') >= 0)?true:false;
    if (firstCheck === false || secondCheck === false) {
      $("#email").addClass("input input--alert");//if not present showing alert
      $("#correctEmailAlert").show();
    } else {
        $("#email").attr("class" , "input");
        $("#correctEmailAlert").hide();//if present hiding the alert
        $("#emailAlert").hide();
      }
  }
}
//function to find the approximate age based on the date of birth given and whether the given date of birth is valid or not
function age() {
  var today = new Date();
  var day = $("#dateOfBirth").val();
  var birthDate = day.match(/(\d{4})(\d{2})(\d{2})/);
  var birthDay = new Date(birthDate[1],birthDate[2]-1,birthDate[3]);
  // to check whether the given year is a leap year or not
  var leapYear = ((birthDate[1]%4 === 0 || birthDate[1]%400 === 0) && birthDate[1]%100 !== 0)?true:false;
  var getAge = today.getFullYear() - birthDay.getFullYear();
  if (birthDate[2] > 12 || birthDate[2] < 1) {//to check if the entered month is valid or not
    $("#dateOfBirth").addClass("input input--alert");
    $("#dateOfBirthAlert").html("enter a valid month").show();
  } else if (birthDate[1] >= today.getFullYear()) {//to check if the given year is vaild wont accept if the year is present or later year
      $("#dateOfBirthAlert").html("enter a valid year").show();
    } else if (birthDate[2][1] == 2) {//checking for the month of febraury
        if (leapYear === true && birthDate[3] > 29) {//validation for febraury and leapyear
          $("#dateOfBirth").addClass("input input--alert");
          $("#dateOfBirthAlert").html("enter a valid date").show();
        } else if (leapYear === false && birthDate[3] > 28) {//checking for non leap year and febraury
            $("#dateOfBirth").addClass("input input--alert");
            $("#dateOfBirthAlert").html("enter a valid date").show();
          } else {
              $("#age").val(getAge);
              $("#dateOfBirth").attr("class" , "input");
              $("#age").addClass("input");
            }//completed for the checking of month of febraury
      } else if ( (birthDate[2][1] == 1 || birthDate[2][1] == 3 || birthDate[2][1] == 5 || birthDate[2][1] == 7 || birthDate[2][1] == 8 || birthDate[2] == 10 || birthDate[2] == 12 ) && birthDate[3] > 31 ) {
          $("#dateOfBirth").addClass("input input--alert");//checking for months having 31 days
          $("#dateOfBirthAlert").html("enter a valid date").show();
        } else if (dateOfBirth[3] > 30) {//checking for months having 30 days
            $("#dateOfBirth").addClass("input input--alert");
            $("#dateOfBirthAlert").html("enter a valid date").show();
          } else {//after completion of all validations returning age based on date of birth given
              $("#age").val(getAge);
              $("#age").addClass("input");
              $("#dateOfBirth").attr("class" , "input");
              $("#dateOfBirthAlert").hide();
            }
}
function clear() {
//function to clear the filled responses on refresh of the page
  $(".container").find('input:input, select, textarea').val('');
  $(".container").find('input:radio, input:checkbox').attr('disabled' , 'disabled').removeAttr('selected');
  if ($(".container").find("input:input , select").has("class" ,"input input--alert")) {
    $(".container").find(".input").attr("class" , "input");
    $(".error").hide();
}
}
//getting ready of the functions when clicked on the save and cancel functions
$(document).ready(function() {
  $("#cancel").click(function() {//function to clear the filled responses
    $(".container").find('input:input, select, textarea').val('');
    $(".container").find('input:radio').attr('disabled' , 'disabled').removeAttr('selected');
    if ($(".container").find("input:input , select").has("class" ,"input input--alert")) {
      $(".container").find(".input").attr("class" , "input");
      $(".error").hide();
    }
  });//closing of the functin for clearing the responses
  $("#save").click(function() {
    if($("input").val() === "") {
      mobileNo();//returning to the alert function if the fields are emepty
      if($("#email").val() === "") {//checking if email if filled or not
        $("#email").attr("class" , "input input--alert");
        $("#emailAlert").show();
      }
    } else {//building a table with the input fields filled if no field is filled
        var body = $("<div></div>");
        var table = $("<table class='table table--bordered'></table>");
        var tr1 = $("<tr></tr>");
        var td11 = $("<td>" + 'Title' + "</td>");
        var td12 = $("<td>" + $("#gender").val() + "</td>");
        var tr2 = $("<tr></tr>");
        var td21 = $("<td>" + 'First Name' + "</td>");
        var td22 = $("<td>" + $("#firstName").val() + "</td>");
        var tr3 = $("<tr></tr>");
        var td31 = $("<td>" + 'Middle Name' + "</td>");
        var td32 = $("<td>" + $("#middleName").val() + "</td>");
        var tr4 = $("<tr></tr>");
        var td41 = $("<td>" + 'last Name' + "</td>");
        var td42 = $("<td>" + $("#lastName").val() + "</td>");
        var tr5 = $("<tr></tr>");
        var td51 = $("<td>" + 'DOB' + "</td>");
        var td52 = $("<td>" + $("#dateOfBirth").val() + "</td>");
        var tr6 = $("<tr></tr>");
        var td61 = $("<td>" + 'Age' + "</td>");
        var td62 = $("<td>" + $("#age").val() + "</td>");
        var tr7 = $("<tr></tr>");
        var td71 = $("<td>" + 'Mobile No' + "</td>");
        var td72 = $("<td>" + $("#mobileNo").val() + "</td>");
        var tr8 = $("<tr></tr>");
        var td81 = $("<td>" + 'eamil' + "</td>");
        var td82 = $("<td>" + $("#email").val() + "</td>");
        tr1.append(td11);
        tr1.append(td12);
        tr2.append(td21);
        tr2.append(td22);
        tr3.append(td31);
        tr3.append(td32);
        tr4.append(td41);
        tr4.append(td42);
        tr5.append(td51);
        tr5.append(td52);
        tr6.append(td61);
        tr6.append(td62);
        tr7.append(td71);
        tr7.append(td72);
        tr8.append(td81);
        tr8.append(td82);
        table.append(tr1);
        table.append(tr2);
        table.append(tr3);
        table.append(tr4);
        table.append(tr5);
        table.append(tr6);
        table.append(tr7);
        table.append(tr8);
        table.css({"background":"grey","color":"white"});
        body.append(table);
        var div = $("<div><div>");//appending the filled values into a table
        div.css({"color":"blue","width":"75%","margin":"auto"});
        $(div).html("Thank You For Registering With Us , your details have been saved");
        body.append(div);
        $(".container").html(body);
      }//closing the function of save button
  });
});//closing the entire function
