document.getElementById("calc").onclick = function() {
  var fnum = Number(document.getElementById("fn").value);
  var oper = document.getElementById("op").value;
  var senum = Number(document.getElementById("sn").value);
  console.log(fnum);
  console.log(oper);
  console.log(senum);
  if (oper == "+") {
    var result = fnum + senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else if (oper == "-") {
    var result = fnum - senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else if (oper == "/") {
    var result = fnum / senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else if (oper == "+") {
    var result = fnum + senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else if (oper == "*") {
    var result = fnum * senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else if (oper == "x") {
    var result = fnum * senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else if (oper == "%") {
    var result = fnum % senum;
    console.log(result);
    document.getElementById("header").innerHTML = result
    document.getElementById("calcstat").innerHTML = "Calculated!"
  }
  else {
    document.getElementById("calcstat").innerHTML = "Please enter a proper operator and/or number."
  }
};
document.getElementById("reset").onclick = function () {
    document.getElementById("fn").value = ""
    document.getElementById("op").value = ""
    document.getElementById("sn").value = ""
    document.getElementById("header").innerHTML = "Calculator"
    document.getElementById("calcstat").innerHTML = ""
}