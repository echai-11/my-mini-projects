var button = document.getElementById('submit');
var question = document.getElementById('question');
var output = document.getElementById('output-q');
var answer = document.getElementById('output-a');
function yesOrNo(max){
    var n = Math.floor(Math.random() * Math.floor(max));
    var r;
    if ((n-2) % 2 === 0){
     r = true;
     answer.innerText = "ANSWER: yes";
    } else if ((n % 7) === 0){
        answer.innerText = "ANSWER: maybe";
    } else {
     r =false;
     answer.innerText = "ANSWER: no";
    }
    console.log(n);
}

button.onclick = function(){
    if (question.value.length <= 0){
        alert("ask a question please");
    } else if(question.value.length >= 50){
        alert("question is too long");
    } else if (button.value =="on") {
        button.innerText = "ask again";
        question.style.display = "none";
        var pasteq = "QUESTION: ";
        pasteq += question.value;
        output.innerText = pasteq;
        yesOrNo(100);
        button.value = "off";
    } else if (button.value = "off"){
        button.innerText = "ask";
        question.style.display = "block";
        question.style.marginLeft = "auto";
        question.style.marginRight= "auto";
        question.value = "";
        output.style.backgroundColor = "black";
        output.innerText = "";
        answer.style.backgroundColor = "black";
        answer.innerText = "";
        button.value = "on";
    }   
}