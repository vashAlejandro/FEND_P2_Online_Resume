/*
This is empty on purpose! Your code to build the resume will go here.
*/

// $("#main").append("Alejandro Vasquez");

/*var awesomeThoughts = "I am Alejandro and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts =
	awesomeThoughts.replace("AWESOME", "FUN");

	$("#main").append(funThoughts);*/

/*	var myName = "Alejandro Vasquez";
	var formattedName = HTMLheaderName.replace("%data%", myName);

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

	//topContact
	$("#topContacts").append(formttedMobile);
	$("#topContacts").append(formttedEmail);
	$("#topContacts").append(formttedGithub);
	$("#topContacts").append(formttedTwitter);
	$("#topContacts").append(formttedLocation);

	// Pic, welcome_messege and skills
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcmMsg);
	$("#header").append(HTMLskillsStart);
	$("#header").append(formattedSkills);


	// Work Experience section - Dot notation
	var work = { };
	work.position = "Coordinator School of Architecture";
	work.employer = "Universidad Central del Este";
	work.yearsWorked = "Two Years";
	work.city = "San Pedro de Macoris";

	var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
	var formattedworkTitle = HTMLworkTitle.replace("%data%", work.position);

	// workEmployer and workTitle concat
	var formattedJob = formattedworkEmployer + formattedworkTitle;

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(formattedJob);

	// Education section - Bracket notation
	var education = { };
	education["school"] = "Universidad Central del Este";
	education["degree"] = "Bachelor";
	education["years"] = "2009 - 2013";
	education["schoolCity"] = "San de Macoris";

	var formattedSchool = HTMLschoolName.replace("%data%", education["school"]);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education["degree"]);

	// school and degree concat
	var formattedschoolDegree = formattedSchool + formattedDegree;

	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(formattedschoolDegree);

	console.log(formattedschoolDegree);

	var education = {
		"schools" : [
			{
				"name": "Universidad Central del Este",
				"city": "San Pedro de Macoris, D.R.",
				"degree": "Bachelor",
				"major": ["Architecture", "English"]
			}
		],
		"online_courses" : [
			{
				"name": "Udacity.com",
				"city": "Latham St., Mountain View, CA, US",
				"degree": "Nanodegree",
				"major": "Front End Web Developer"
			}
		]
	};*/
/*=====  End of Practice  ======*/


/*========================================
=            Objects Section            =
========================================*/
/* Bio Objects */

var bio = {
	"name": "Alejandro VASQUEZ",
	"role": "Architect | Front End Ninja",
	"contacts": {
		"mobile": "829 340 3842",
		"email": "vash.alejandro@gmail.com",
		"github": "vashAlejandro",
		"twitter": "@vasquezhirujo",
		"location": "Calle Simon Bolivar, San Pedro de Macoris, D.R."
	},
	"welcomeMessage": "Hi fellows! This is my awesome resume.",
	"skills": [
		"CAD", "BIM", "HTML", "CSS", "JavaScript", "jQuery"
	],
	"bioPic": "images/ale.jpg"
};

/* Work Objects */

var work = {
	"jobs": [
		{
			"employer": "Universidad Central del Este",
			"title": "Intern - School of Architecture",
			"location": "Universidad Central del Este Campus UCE, Av Francisco Alberto Caamaño Deñó, San Pedro de Macoris 21000",
			"date": "Octuber 2013 - April 2014",
			"description": "Graphic Design, Draftman, Colaborator."
		},
		{
			"employer": "Universidad Central del Este",
			"title": "Coordinator Faculty of Architecture",
			"location": "Universidad Central del Este Campus UCE, Av Francisco Alberto Caamaño Deñó, San Pedro de Macoris 21000",
			"date": "April 2014 - Present",
			"description": "Architect, CAD Manager, Graphic Design."
		},
		{
			"employer": "Universidad Central del Este",
			"title": "Professor School of Architecture - FAA",
			"location": "Universidad Central del Este Campus UCE, Av Francisco Alberto Caamaño Deñó, San Pedro de Macoris 21000",
			"date": "April 2014 - August 2015",
			"description": "CAD Instructor. Autodesk AutoCAD, Autodesk Revit Architecture."
		}
	]
};

/* Project Objects */

var projects = {
	"projects": [
		{
			"title": "Hybrid Housing - Zero Energy",
			"date": "September 2013",
			"description": "A prototype of a hybrid house which uses the sun energy to produce the electricity that needs to keep working.",
			"images": [
				"https://placehold.it/400x350",
				"https://placehold.it/400x350",
				"https://placehold.it/400x350",
				"https://placehold.it/400x350"
			]
		},
		{
			"title": "Unidad Educativa de Uso Comunitario",
			"date": "September 2012",
			"description": "A multilevel education unit for a marginal neighborhood, wich serves as a concentration point giving multiple services; public librery, courts (Basket, Softball, Volleyball, etc.). The main structure is made out of steel.",
			"images": [
				"https://placehold.it/400x350",
				"https://placehold.it/400x350",
				"https://placehold.it/400x350",
				"https://placehold.it/400x350"
			]
		}
	]
};

/* Education Objects */

var education = {
	"schools": [
		{
			"name": "Universidad Central del Este",
			"location": "Universidad Central del Este Campus UCE, Av Francisco Alberto Caamaño Deñó, San Pedro de Macoris 21000",
			"degree": "Bachelor",
			"major": "Architecture",
			"date": "January 2009 - Octuber 2013",
			"url": "uce.edu.do"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"date":  "July 2015 - Present",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};


/*=====  End of Objects Section  ======*/


/*===================================
=            Bio Section            =
===================================*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName);


/* Bio topContacts Section */

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPicture);
var formattedWelcmMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcmMsg);


/* Bio Skills Section */

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
	}

	// var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
	// $("#skills").append(formattedSkill2);
	// var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);
	// $("#skills").append(formattedSkill3);
	// var formattedSkill4 = HTMLskills.replace("%data%", bio.skills[3]);
	// $("#skills").append(formattedSkill4);
	// var formattedSkill5 = HTMLskills.replace("%data%", bio.skills[4]);
	// $("#skills").append(formattedSkill5);
}


/*=====  End of Bio Section  ======*/


/*===============================================
=            Internationalize Button            =
===============================================*/
// $("#main").append(internationalizeButton);
function inName (name) {
	// body...
	name = name.split(" ");
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	finalName = name.join(" ");

	return finalName;
}

/*=====  End of Internationalize Button  ======*/


/*====================================
=            Work Section            =
====================================*/
work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		// workEmployer and workTitle concat
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].date);
		$(".work-entry:last").append(formattedDate);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

/*=====  End of Work Section  ======*/


/*=======================================
=            Project Section            =
=======================================*/
projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].date);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjectDesc);

		if (projects.projects[i].images.length > 0) {
			for (var image in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();

/*=====  End of Project Section  ======*/


/*===================================
=            Map Section            =
===================================*/
$("#mapDiv").append(googleMap);

/*=====  End of Map Section  ======*/


/*=========================================
=            Education Section            =
=========================================*/
education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		// Concats Edu Name-Degree
		var formattedEdu = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedEdu);
		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].date);
		$(".education-entry:last").append(formattedSchoolDate);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	for (var l = 0; l < education.onlineCourses.length; l++) {
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[l].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[l].school);
		// Concats Edu Name-Degree
		var formattedOnlineEdu = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineEdu);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[l].date);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[l].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

education.display();

/*=====  End of Education Section  ======*/


/*==================================================
=            Bio footerContacts Section            =
==================================================*/
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

/*=====  End of Bio footerContacts Section  ======*/