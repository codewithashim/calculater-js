function deleteMe() {
  document.getElementById("MyResult").value = "";
}

function calculator(newValue) {
  document.getElementById("MyResult").value += newValue;
}

function answer() {
  var a = document.getElementById("MyResult").value;
  var b = eval(a);
  document.getElementById("MyResult").value = b;
}
