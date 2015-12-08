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
function selectTitle() {
  if ($("#gender option:selected").html() === "") {
    $("#selectTitleAlert").show();
  }
}
function firstName() {
  if ($("#firstName").val() === "") {
    $("#firstName").addClass("input input--alert");
    $("#firstNameAlert").show();
    selectTitle();
  }
}
function lastName() {
  if ($("#lastName").val() === "") {
    $("#lastName").addClass("input input");
    $("#lastNameAlert").show();
    firstName();
  }
}
function dateOfBirth() {
  if ($("#dateOfBirth").val() === "") {
    $("#dateOfBirth").addClass("input input--alert");
    $("#dateOfBirthAlert").show();
    lastName();
  }
}
function mobile() {
  var number = $("#mobileNo").val().length;
  if(number > 10 || number < 10) {
    $("#correctMobileNoAlert").show();
    $("#mobileNo").addClass("input input--alert");
  }
  else {
      $("#mobileNo").removeAttr("class" , "input input--alert");
      $("#correctMobileNoAlert").hide();
    }
}
//function to check whether a given mobile number is valid or not
function mobileNo() {
  if ($("#mobileNo").val() === "") {
    $("#mobileNo").addClass("input input--alert");
    $("#mobileNoAlert").show();
    dateOfBirth();
  }
}
//function to check whether a given email is valid or not
function email() {
  var validEmail = $("#email").val();
  var length = validEmail.length;
  var i=0;
  if(validEmail.charAt[i] === "@") {
    window.alert(validEmail);
    i++;
    return true;
  }
  else {
    $("#email").addClass("input input--alert");
    $("#correctEmailAlert").show();
  }
}
