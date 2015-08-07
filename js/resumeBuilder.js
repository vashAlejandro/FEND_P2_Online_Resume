/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Alejandro Vasquez");

/*var awesomeThoughts = "I am Alejandro and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts =
	awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);*/

var name = "Alejandro Vasquez"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Architect | Front End Ninja"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);