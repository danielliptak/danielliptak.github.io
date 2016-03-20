if (confirm("Vállalod az idoutazassal jaro felelosseget?")===true) {} else {
	window.location.href = 'http://www.greenfoxacademy.com';
    }
	
var myFunction = function(){
	var answear = prompt("mult vagy jovo?")
	if (answear === "mult"){
document.getElementById("recommendation").innerHTML = "Western";}
else {document.getElementById("recommendation").innerHTML = "Y2K tipusu zip-zarok altal uralt jovo";}
}