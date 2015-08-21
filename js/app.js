'use strict';

$(document).ready(function() {

var photoArray = [ ];
var rightPhoto;
var leftPhoto;

var KittenPhoto = function(fileLocation, votes) {
	this.path = fileLocation;
	this.votes = 1;
	this.index = [ ];
};

var photo0 = new KittenPhoto('img/photo0.jpg', 1);
var photo1 = new KittenPhoto('img/photo1.jpg', 1);
var photo2 = new KittenPhoto('img/photo2.jpg', 1);
var photo3 = new KittenPhoto('img/photo3.jpg', 1);
var photo4 = new KittenPhoto('img/photo4.jpg', 1);
var photo5 = new KittenPhoto('img/photo5.jpg', 1);
var photo6 = new KittenPhoto('img/photo6.jpg', 1);
var photo7 = new KittenPhoto('img/photo7.jpg', 1);
var photo8 = new KittenPhoto('img/photo8.jpg', 1);
var photo9 = new KittenPhoto('img/photo9.jpg', 1);
var photo10 = new KittenPhoto('img/photo10.jpg', 1);
var photo11 = new KittenPhoto('img/photo11.jpg', 1);
var photo12 = new KittenPhoto('img/photo12.jpg', 1);
var photo13 = new KittenPhoto('img/photo13.jpg', 1);

photoArray.push(photo0);
photoArray.push(photo1);
photoArray.push(photo2);
photoArray.push(photo3);
photoArray.push(photo4);
photoArray.push(photo5);
photoArray.push(photo6);
photoArray.push(photo7);
photoArray.push(photo8);
photoArray.push(photo9);
photoArray.push(photo10);
photoArray.push(photo11);
photoArray.push(photo12);
photoArray.push(photo13);
console.log(photoArray);

var Tracker = function() {
	this.leftPhoto;
	this.rightPhoto;
};

var tracker = new Tracker();

Tracker.prototype.addVote = function(e) {
	var photo = this.findPhoto(e.target.attributes[1].value); 
	photo.votes++;
	console.log(photo.votes);
	this.makeChart();
};
 
Tracker.prototype.findPhoto = function(filePath) {
	for (var i = 0; i < photoArray.length; i++) {
		if (filePath === photoArray[i].path) {
			return photoArray[i];

		}
	}
};

Tracker.prototype.makeChart = function() {
	console.log('makeChart');
	var data = [
    {
        value: this.leftPhoto.votes,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: this.rightPhoto.votes,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
console.dir(data);

var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

	var ctx = $('#kittyChart').get(0).getContext('2d');
	console.dir(ctx);
	var myCatChart = new Chart(ctx).Pie(data, options);

};

Tracker.prototype.getRandomPhoto = function() {
	this.leftPhoto = photoArray[Math.floor(Math.random() * (photoArray.length - 1))];
	this.rightPhoto = photoArray[Math.floor(Math.random() * (photoArray.length - 1))];
	var img1 = $('#leftPhoto')[0];
		img1.src = this.leftPhoto.path;
	var img2 = $('#rightPhoto')[0];
		img2.src = this.rightPhoto.path;
		this.makeChart();
};

$('#leftPhoto1').click(function(){
   $('.selected').removeClass('selected'); // removes the previous selected class
   $(this).addClass('selected'); // adds the class to the clicked image
});

var lphoto = $('#leftPhoto');
var rphoto = $('#rightPhoto');
var results = $('#results');
var nextbutton = $('#nextButton');

$(rphoto).click(function(e) {
	tracker.addVote(e);
});

$(lphoto).click(function(e) {
	tracker.addVote(e);
});

$(nextbutton).click(function() {
	tracker.getRandomPhoto();
});

tracker.getRandomPhoto();
	console.log(this.rightPhoto);
	
});






