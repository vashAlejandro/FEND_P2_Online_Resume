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
/*
------------------- End of my practices --------------------------
*/
/*
------------------ Creatting my four objects --------------------------
*/

// bio object
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
		"CAD", "BIM", "HTML", "CSS", "JavaScript"
	],
	"bioPic": "images/fry.jpg"
};

// work object
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

// projects object
var projects = {
	"projects": [
		{
			"title": "Hybrid Housing - Zero Energy",
			"date": "September 2013",
			"description": "A prototype of a hybrid house which uses the sun energy to produce the electricity that needs to keep working.",
			"images": [
				"https://placehold.it/350x350",
				"https://placehold.it/350x350",
				"https://placehold.it/350x350"
			]
		}
	]
};

// education object
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

/*
-------------------------formatting data-----------------------------
*/

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcmMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedWelcmMsg);
$("#header").append(formattedPicture);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
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

work.display = function() {
	for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	// workEmployer and workTitle concat
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
	$(".work-entry:last").append(formattedDate);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

// $("#main").append(internationalizeButton);

function inName (name) {
	// body...
	name = name.split(" ");
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	finalName = name.join(" ");

	return finalName;
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDesc);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();

$("#mapDiv").append(googleMap);

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$("#education-entry:last").append(formattedSchoolName);
	}
}