if (confirm("Vállalod az idoutazassal jaro felelosseget?")===true) {} else {
	window.location.href = 'http://www.greenfoxacademy.com';
    }
	
	
//kérdésekre válaszolva adjon tanácsot//
function myFunction() 
{
if (prompt("Mult vagy jövő?") === "múlt")
	{
	document.getElementById("recommendation").innerHTML = "Western kor";
	}
	else {document.getElementById("recommendation").innerHTML = "Új bolygók benépesítése 2100";}
	
	
	
    document.getElementById("recommendation").innerHTML = "Western";	
}