if (confirm("Vállalod az idoutazassal jaro felelosseget?")===true) {} else {
	window.location.href = 'http://www.greenfoxacademy.com';
    }

	
var myFunction = function(answear,second,third){
	if (answear === "mult"){if (second === "korai"){document.getElementById("recommendation").innerHTML = "okori Roma";}
}
							else if (second==="kesei"){document.getElementById("recommendation").innerHTML = "western";}

else {document.getElementById("recommendation").innerHTML = "Y2K tipusu zip-zarok altal uralt jovo";}


myFunction(prompt("mult vagy jovo"), prompt("korai vagy kesei"), prompt("kaland vagy nyugi"))
}




/* this is my finished codacademy lesson what i use as a remainder how to do multiple if


var myFunction = function(){
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1===choice2) {
        return "The result is a tie!";
        }
    else if (choice1==="paper") {if (choice2==="rock"){
        return "paper wins"}
        else {return "scissors wins"}
        }
    else if (choice1==="scissors") {if (choice2==="rock"){
        return "rock wins"}
        else {return "scissors wins"}
        }
    else if (choice1==="rock") {if (choice2==="scissors"){
        return "rock wins"}
        else {return "paper wins"}
        } 
        
};
compare (userChoice, computerChoice)*/