var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function changeColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	
	css.textContent = body.style.background + ";" ;
}

function copyText (){
	body.style.background.select();
	body.style.background.setSelectionRange(0, 99999);
	document.execCommand("copy");
}
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);


css.onclick = function() {
  document.execCommand("copy");
}

css.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", css.textContent);
	console.log(event.clipboardData.getData("text"))
	window.alert("Successfully copied!");
  }
});

css.onmouseover = function() {
	document.getElementById("popup").style.display = "block";
}
css.onmouseout = function () {
	document.getElementById("popup").style.display = "none";
}