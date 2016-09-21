if (confirm("Vállalod az idoutazassal jaro felelosseget?")===true) {

}
else {
	window.location.href = 'http://www.greenfoxacademy.com';
}

var myFunction = function(answear, second, third){

  if (answear === "mult"){

		if (second === "természet"){

			document.getElementById("recommendation").innerHTML = "western";
		}
	  else if (second==="varos"){

		  document.getElementById("recommendation").innerHTML = "iparosodas";}
	  }

  else if (answear==="jovo") {
		if (third==="kaland"){
			document.getElementById("recommendation").innerHTML = "Y2K tipusu zip-zarok altal uralt jovo";
		}

	  else if (third==="nyugalom"){
			document.getElementById("recommendation").innerHTML = "utopia 2222";
	  }
  ;}
}


myFunction(prompt("mult vagy jovo"),prompt("termeszet vagy varos"),third = prompt("kaland vagy nyugalom"))
