function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1,number2){
  return number1*number2;
}

function divide(number1, number2){
  return number1/number2;
}

// const result1 = add(number1, number2);
// const result2 = subtract(number1, number2);
// const result3 = multiply(number1, number2);
// const result4 = divide(number1,number2)

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  })
});
// alert(result1, result2, result3, result4);
// alert(result4);
