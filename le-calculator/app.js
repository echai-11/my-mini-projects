var display_screen= document.getElementById('display_field');
var button = document.getElementsByTagName('button');
var bonus = document.getElementById('thebonus');
var bonusmessage = document.createElement('P');

function getInnerText (id){
	var id = document.getElementById(id);
	display_screen.innerText += id.innerText;
}
function limit (){
	if (display_screen.innerText.length >= 11){
	var newstring = "";
	display_screen.innerText = newstring;
	}
}
function init($keys){
	for (i = 0; i< $keys.length; i++){
		$keys[i].onclick = function(){
			var buttonID = this.innerText;
			if (buttonID == "="){
				var output= eval(display_screen.innerText);
				display_screen.innerText = output;
				var string = display_screen.innerText;
				if (string == "undefined" || string == null){
					alert("void entry");
					display_screen.innerText = "";
				}
				if (string == "Infinity"){
					alert("undefined");
					display_screen.innerText = "";
				}
			} else if (buttonID == "C"){
				display_screen.innerText = "";
				bonusmessage.style.display = "none";
			} else{
			getInnerText(buttonID);
			}
			if (display_screen.innerText.length >= 10){
				alert('if you add more numbers the output field will be wiped!');
				limit();
			}
			if (display_screen.innerText.length = 1){
				var string = display_screen.innerText;
				if (string == "+"|| string == "-" ||
					string == "*"|| string == "/"){
				alert("undefined");
				display_screen.innerText = "";
				}
			} 
			if (display_screen.innerText == "2+2"){
				display_screen.innerText = "2+2-1=3";
				bonus.appendChild(bonusmessage);
				bonusmessage.style.display= "block";
				bonusmessage.innerText = "you got it ! ! ! !"
				bonusmessage.style.color = "yellow";
				bonusmessage.style.textAlign = "center";
				bonusmessage.style.fontSize = "2rem";
				bonusmessage.style.fontFamily= "Muli, sans-serif"
				bonusmessage.style.marginTop = "-3px";
				bonusmessage.style.marginBottom= "0";
			} 
		}
	}
}
init(button);


