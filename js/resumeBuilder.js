/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Alejandro Vasquez");

/*var awesomeThoughts = "I am Alejandro and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts =
	awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);*/

var name = "Alejandro Vasquez";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Architect | Front End Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 var bio = {
 	"name" : "Alejandro Vasquez",
 	"role" : "Web Developer",
 	"contact" : {
 		"mobile" : "829-340-3842",
 		"email" : "vash.alejandro@gmail.com",
 		"github" : "vashAlejandro",
 		"twitter" : "@vasquezhirujo",
 		"location" : "San Pedro de Macoris, D.R."
 	},
 	"bioPic" : "images/fry.jpg",
 	"welcome_messege" : "Hi fellows! This is my awesome Online Resume.",
 	"skills" : [
 		"CAD ", "BIM ", "HTML ", "CSS ", "JavaScript"
 	]
 };

var formttedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formttedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formttedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formttedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formttedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWelcmMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_messege);


$("#header").append(formttedMobile);
$("#header").append(formttedEmail);
$("#header").append(formttedGithub);
$("#header").append(formttedTwitter);
$("#header").append(formttedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcmMsg);
$("#header").append(formattedSkills);

var work = {
	"currentJob" : "Coordinator School of Architecture"
};

// work["currentJob"] = "Coordinator School of Architecture";
work["employer"] = "Universidad Central del Este";

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.currentJob);

$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);

console.log(work["employer"]);
