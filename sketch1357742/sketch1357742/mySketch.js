//Car = Seconds
//Clouds = Minutes
// Moon = Hours
// all the images seen in this code just loaded in. Work smarter not harder!

//just making time variables
let sec;
let min;
let hr;


function setup() {
	createCanvas(800,400);
	
}
//This loads all the images in so that I can actually do stuff with them
function preload() {
	clouds = loadImage('Clouds.png');
	moon = loadImage('moon.png');
	wallpaper = loadImage('Skyline.png');
	starsbackground = loadImage('stars.png');
	starsbackground2 = loadImage('stars.png');
	starsbackground3 = loadImage('stars.png');
	car = loadImage('taxi.png')
	secstar = loadImage('secstar.png');
	
}


function draw() {
	
		sec = second(); 
		min = minute();
		hr = hour();
	
	//I put the background here so when the moon, car, and clouds move the would not leave a trail of themselves
	background('black');
	
	//This is the recgtangle outline of the clock
	rect(200,0,600,400);
	noFill();
	stroke(100,100,240);
	
	
	//These images don't move as well I just wanted the sky to have stars
	image(starsbackground,200,0,500,300);
	image(starsbackground2,600,0,500,300);


	// The moon moves with the hours of the day and is in front of the city so that it does not get covered up by the clouds
	let x2 = map(hr,0,24,200,width - 200);
	image(moon,x2,10,59,59);
	
	
	//This is the background this doesn't move at all 
	//but has a transparent background so I couldnt set it as the actual background
	image(wallpaper,200,0,600,400);
	

	//This makes the clouds move across the screen with every minute
	let x = map(min,0,59,200,width - 200);
	image(clouds,x,0,600,230);
	
	//The car moves every second
	let x3 = map(sec,0,59,200,width - 200);
	image(car,x3,304,130,130);
	
}