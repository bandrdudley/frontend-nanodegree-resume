var work = {
   "jobs": [
     {
		"employer": "AT&T",
		"title": "Member of the Technical Staff",
		"location": "Dallas, TX, US",
		"dates": "January 2008 - Present",
		"description": "Develop applications for the SalesExpress mobile application with JavaScript, jQueryUI and jQuery Mobile ."
     },
     {
		"employer": "izmoCars/Prize Corporation",
		"title": "Senior Developer",
		"location": "Chattanooga, TN, US",
		"dates": "May 2006 - December 2007",
		"description": "Programmed, maintained and supported Automotive Customer Relationship Management (CRM) web application with Java Server Pages (JSP), Java, and Servlets"
     }
   ]
}

work.display = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer+" "+formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

var projects = {
   "projects": [
     {
		"title": "Project Title 1",
		"dates": "2013",
		"description": "This is a description of Project. The first image pictures fiber optics.  The second image pictures a smart phone resting on a laptop.",
		"images": ["images//fiber.jpg","images//firefox.jpg"]
     },
     {
		"title": "Project Title 2",
		"dates": "2011",
		"description": "This is a description of Project. The first image pictures a smart phone.  The second image pictures someone using a tablet.",
		"images": ["images//iphone.jpg","images//tablet.jpg"]
     }
   ]
}

projects.display = function() {
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		for(image in projects.projects[project].images){
			var formattedPicture = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedPicture);
		}
	}
}
projects.display();

var bio = {
	"name": "Brian Dudley",
	"role": "Web Developer",
	"contacts": {
		"email": "bandrdudley@gmail.com",
		"mobile": "678-555-6863",
		"github": "bandrdudley",
		"twitter": "@BrianADudley",
		"location":"Dallas, TX, US"
	},
	"pictureUrl": "images//alamo.jpg",
	"welcomeMessage": "IT professional with over 12 years of experience in Networking and a Software Engineering.  My development experience has been primarily focused on multi-tier distributed application, and web design / development. Specifically, my experience spans various stages of software development lifecycles such as requirements analysis, design, develop and test applications utilizing various languages and technologies.  I have strong working knowledge in Java, GWT, Flex, Linux, Oracle, and various Web tools.  I am a proven team player as well as an individual contributor.",
	"skills": ["JavaScript","jQuery","HandlebarsJS","HTML5"]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureUrl);
	$("#header").append(formattedPicture);

	var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);		
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}
bio.display();

bio.displayContacts = function(section) {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$(section).append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$(section).append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$(section).append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$(section).append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$(section).append(formattedLocation);
}
bio.displayContacts("#topContacts");


var education = {
   "schools": [
     {
		"name": "University of Southern Maine",
		"location": "Portland, ME, US",
		"degree": "BS",
		"major": ["BusAdmin"],
		"minor": ["Economics"],
		"year": "1993",
		"url": "http://usm.edu"
     },
     {
		"name": "University of Tennessee at Chattanooga",
		"location": "Chattanooga, TN, US",
		"degree": "MS",
		"major": ["CompSci"],
		"year": "2006",
		"url": "http://utc.edu"
     }
   ],
   "onlineClasses": [
    {
	   "name": "Front-End Web Developer Nanodegree",
	   "school": "Udacity",
	   "dates": "2015",
	   "url": "http://udacity.com/course/ud804",
	   "location": "Dallas, TX, US"
    }
   ]
}

education.display = function() {
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName+formattedDegree);
		var formattedDates = HTMLprojectDates.replace("%data%", education.schools[school].year);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineClasses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].name);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
		$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
		$(".education-entry:last").append(formattedOnlineUrl);		
	}
}
education.display();

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.screenX, loc.screenY);
});

// you want to see a map? here's a map
$("#mapDiv").append(googleMap);

bio.displayContacts("#footerContacts");




