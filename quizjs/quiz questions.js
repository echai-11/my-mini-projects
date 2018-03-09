const quizlist = [
    {
        question: "A group of cats is called _______.",
        options: [
            {
                point:0,
                content: "a clump",
            },
            {
                point: 1,
                content: "a clowder",
            },
            {
                point:0,
                content:  "a crown",
            },
            {
                point:0,
                content: "a murder",
            },
            {
                point:0,
                content:  "a clan",
            },
        ],
        more: "A group of cats is called a clowder. You can also call a group of cats a clutter, a glaring, or a pounce.  A bunch of kittens is called a litter, a kindle, or an intrigue.",
        id: 1,
        
    },
    {
        question: "Cats can't taste _______.",
        options:[
            {
                point:0,
                content: "bitterness",
            },
            {
                point:0,
                content: "sourness",
            },
            {
                point:1,
                content:  "sweetness",
            },
            {
                point:0,
                content: "saltiness",
            },
            {
                point:0,
                content:  "dirtiness",
            },
        ], 
        more: "Cats can't taste sweetness. They are missing one of two crucial genes to taste sweetness. Cats exclusively eat meat. However, many commercial pet food manufacturers today use corn and grains in their food products which overtime can lead to diabetes and obesity in felines.",
        id: 2,
    },
    {
        question: "Cats have an aversion to _______ and it is also toxic to them!",
        options: [
            {
                point:1,
                content: "citrus",
            },
            {
                point:0,
                content: "chocolate",
            },
            {
                point:0,
                content:  "milk",
            },
            {
                point:0,
                content: "caffeine",
            },
            {
                point:0,
                content:  "vegetables",
            },
        ],
        more:"Cats have an aversion to citrus. Cats also are lactose intolerant and should not be given cow's milk! Caffeine and chocolate are also toxic at high dosages!",
        id: 3,  
    },
    {
        question: "A cat's brain is  ___ % similar to a human brain.",
        options: [
            {
                point:0,
                content: "80",
            },
            {
                point:0,
                content: "60",
            },
            {
                point:0,
                content:  "50",
            },
            {
                point:0,
                content: "70",
            },
            {
                point: 1,
                content: "90",
            },
        ],
        more: "A cat's brain is  90% similar to a human brain. Maybe this is why they are so intune with human emotions!",
        id: 4,
        
    },
    {
        question: "Cats only sweat through their _______.",
        options:[
            {
                point:0,
                content: "mouths",
            },
            {
                point:1,
                content: "paws",
            },
            {
                point:0,
                content:  "ears",
            },
            {
                point:0,
                content: "tails",
            },
            {
                point:0,
                content:  "whiskers",
            },
        ], 
        more: "Paws! Isn't that just adorable?",
        id: 5,
    },
    {
        question: "A cat can jump  ___ times its length.",
        options: [
            {
                point:0,
                content: "10",
            },
            {
                point:0,
                content: "14",
            },
            {
                point:0,
                content:  "3",
            },
            {
                point:1,
                content: "7",
            },
            {
                point:0,
                content:  "11",
            },
        ],
        more: "A cat can jump 7 times its length. And they can survive falling off great heights too (but please don't test this on your cats)!",
        id: 6,
    },
    {
        question: "Cats have ___ toes on their front paws and ___ toes on their back paws.",
        options: [
            {
                point:0,
                content: "4, 4",
            },
            {
                point:0,
                content: "5, 5",
            },
            {
                point:1,
                content:  "5, 4",
            },
            {
                point:0,
                content: "4, 5",
            },
            {
                point:0,
                content:  "4, 3",
            },
        ],
        more: "Cats have 5 toes on their front paws and 4 on their back paws (with the exception for polydactyl cats).",
        id: 7,
    },
    {
        question: "Cats carry pregnancies for about ___ weeks.",
        options: [
            {
                point:0,
                content: "12",
            },
            {
                point:1,
                content: "9",
            },
            {
                point:0,
                content:  "16",
            },
            {
                point:0,
                content: "24",
            },
            {
                point:0,
                content:  "6",
            },
        ],
        more:"Cats carry pregnancies for about 9 weeks. Cats can give birth to a litter of one to eight kittens, but the litter size decreases as she ages.",
        id: 8,
    },
    {
        question: "The oldest cat breed is the _______.",
        options: [
            {
                point:0,
                content: "Bengal",
            },
            {
                point:0,
                content: "Abysinnian",
            },
            {
                point:0,
                content:  "Turkish Angorra",
            },
            {
                point:0,
                content: "Bombay",
            },
            {
                point:1,
                content:  "Egyptian Mau",
            },
        ],
        more:"The oldest cat breed is the Egyptian Mau. The Egyptian Mau is also the only naturally spotted domesticated cat.",
        id: 9,
    }, 
    {
        question: "Felicette was the first cat _______!",
        options: [
            {
                point:1,
                content:"to explore space",
            },
            {
                point:0,
                content: "to gain millions in inheritance",
            },
            {
                point:0,
                content: "to run for mayor"
            },
            {
                point:0,
                content: "to be cloned",
            },
            {
                point:0,
                content:"to win a marathon",
            },
        ],
        more: "Felicette (a.k.a. Astro-cat) is the only cat that's been sent into outerspace!",
        id: 10,
    },
];
const button = document.getElementById('button1');
      button.innerText= "start";
const qbox=document.getElementById('question');
const abox=document.getElementById('answer');
const qcounter=document.getElementById('qcount');
const radioGroup = document.getElementsByClassName('radioClass');
const info = document.getElementById('info');
let question;
let answer;
let more;
var counter= 0;
const display=[];
var x = false;
var score= 0;
var zbutton;
var scorearray=[];

function getQuestion(){
    for (i=0; i<quizlist.length; i++){
        var array=[];
            question = quizlist[i].question;
            array.push(question);
            more = quizlist[i].more;
            array.push(more);
            for (j=0; j < 5; j++){
                answer = quizlist[i].options[j];      
                array.push(answer);
            } 
            display.push(array);
    }
}

function disable(){
    for (var j=0; j<radioGroup.length; j++){
        var dbutton = radioGroup[j];
        dbutton.classList.add('todisable');
    }
}

function getAnswer(){
    for (var j=0; j<radioGroup.length; j++){
        zbutton = radioGroup[j];
        if (zbutton.checked){
            if (zbutton.value === "1"){
                zbutton.parentNode.style.color = "green";
                zbutton.parentNode.style.fontWeight = "bold";
            } else {
                zbutton.parentNode.style.color = "red";
                zbutton.parentNode.style.fontWeight = "bold";
            }
            
            disable();
            document.getElementById('more').style.display="block";
            scorearray.push(zbutton.value);
            return zbutton.value;
        } 
    }
}

function getCheckedButtons(radio_group){
    myTimer = setInterval(function(){
        for (var i=0; i<radio_group.length; i++){
            var xbutton = radio_group[i];
            if (xbutton.checked){
                 x = true;
                if (x = true){
                    window.clearTimeout(myTimer);
                    getAnswer();  
                }
            }
        }     
    },500);
}

function displayQuestion(array){
    let i = counter;
        qbox.innerHTML = array[i][0];
        info.innerHTML = "<p id='more'>" + array[i][1] + "</p>";
        abox.innerHTML = "<li><input type='radio' class='radioClass' name='radioGroup' value=" + array[i][2].point +">" + array[i][2].content + "</li>";
        abox.innerHTML += "<li> <input type='radio'  class='radioClass' name='radioGroup' value=" + array[i][3].point +">" + array[i][3].content + "</li>";
        abox.innerHTML += "<li> <input type='radio' class='radioClass' name='radioGroup' value=" + array[i][4].point +">" + array[i][4].content + "</li>";
        abox.innerHTML += "<li><input type='radio' class='radioClass' name='radioGroup' value=" + array[i][5].point +">" + array[i][5].content + "</li>";
        abox.innerHTML += "<li><input type='radio' class='radioClass' name='radioGroup' value=" + array[i][6].point +">" + array[i][6].content + "</li>";
        qcounter.innerHTML= "question " + (counter + 1) + " of 10." 
        qcounter.style.backgroundColor = "yellow";
        counter +=1;
}
function getScores(array){
    for (i=0; i<array.length; i++){
        score += parseInt(array[i]);
    }
    return score;
}

function getResults (){
    qbox.innerHTML="";
    abox.innerHTML="";
    qcounter.innerHTML= "You got " + score + " question(s) out of 10 questions correct.";
}

button.onclick = function(){
    button.innerText= ">>"; 
    getQuestion();  
    displayQuestion(display);
    getCheckedButtons(radioGroup);
    if (counter === 11){
        getScores(scorearray);
        getResults();
        console.log(scorearray);
        button.style.display ="none";
    }
}







