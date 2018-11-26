// ### Playground
// Exercise 1
function sum_number(a, b) {
  if(a === b){
    return (a + b) * 3;
  }
  else return a + b;
}
document.getElementById('ex1').innerHTML = sum_number(5, 5);
// Exercise 2
function compare(a){
  if(a <= 19){
    return 19 - a;
  }
  else return (a - 19) * 3;
}
document.getElementById('ex2').innerHTML = compare(22);
// Exercise 3
function dividethree(a) {
  var sum = 0;
  var output = [];
  for(var i = 0; i <= a.length; i++){
    if(a.charAt(i) !== "*"){
      sum += +a.charAt(i);
    }
  }
  for(var i = 0; i <= 9; i++) {
    if( (sum + i) % 3 === 0 ) {
      output.push(a.replace("*", i));
    }
  }
  return output;
}
document.getElementById('ex3').innerHTML = dividethree('1234567890*');
// Exercise 4
function dividesix(a){
  var output = [];
  input = dividethree(a);
  for(var i = 0; i <= (input.length - 1); i++){
    var elementend = input[i];
    if(+elementend %2 === 0){
      output.push(elementend);
    }
  }
  return output;
}
document.getElementById('ex4').innerHTML = dividesix('1234567890*');
