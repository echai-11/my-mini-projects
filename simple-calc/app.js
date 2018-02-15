var field = document.getElementById("result_field");
numbers = document.getElementsByClassName('display');
for (i=0; i<numbers.length; i++){
    numbers[i].setAttribute('onclick', 'post(this)');
}
function erase(){
    field.value = "";
}
//me is button being pressed
function post(me){
    field.value += me.innerHTML;
}
//eval not good practice 
function submit(){
    var input = field.value;
    result_field.value = eval(input);
}

