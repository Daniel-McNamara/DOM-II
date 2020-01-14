// Your code goes here


//variables
const body = document.querySelector('body');
const destinationImg = document.querySelector('.content-destination img');
const btn = document.querySelectorAll('.btn');
const destinationDivs = document.querySelectorAll('.destination');
const nav = document.querySelectorAll('nav a');
const mainNav = document.querySelector('.main-navigation');
const mouseLeave = document.querySelector('.intro h2');

// 1. mouseover
destinationDivs.forEach(function(element) {
	element.addEventListener('mouseover', function() {
		element.style.color = 'red';
	});
});

// 2. keydown
body.addEventListener('keydown', function() {
	this.style.backgroundColor = 'skyblue';
});

// 3. wheel
body.addEventListener('wheel', function() {
	const colors = ['skyblue',];
	const random = Math.floor(Math.random() * 4);
	this.style.backgroundColor = colors[random];
});

// 4. load
window.addEventListener('load', function() {
	const busSound = new Audio('sound/bus-door-open.wav');
	busSound.play();
});

// 5. resize
window.addEventListener('resize', function() {
	alert('You have changed the size of the screen!');
});
// 6. scroll
document.addEventListener('scroll', function() {
	mainNav.style.backgroundColor = 'lightseagreen';
});
// 7. dblclick
btn.forEach(function(element) {
	element.addEventListener('dblclick', function() {
		alert('You only have to click once!');
	});
});

// 8. click
btn[0].addEventListener('click', function() {
	destinationImg.src = 'img/fun-in-the-sun.jpg';
	destinationImg.style.width = '600px';
	destinationImg.style.height = '200px';
	event.stopPropagation();
});

btn[1].addEventListener('click', function() {
	destinationImg.src = 'img/mountain-excursion.jpg';
	destinationImg.style.width = '600px';
	destinationImg.style.height = '200px';
	event.stopPropagation();
});

btn[2].addEventListener('click', function() {
	destinationImg.src = 'img/island-getaway.jpg';
	destinationImg.style.width = '600px';
	destinationImg.style.height = '200px';
	event.stopPropagation();
});

// 9. mouseleave
mouseLeave.addEventListener('mouseleave', function() {
	mouseLeave.innerHTML = 'Welcome To Fun Bus!  Enjoy The Ride!';
});

// 10. mixture of mouseover, mouseout, and click with preventDefault()
nav.forEach(function(element) {
	element.addEventListener('mouseover', function() {
		this.style.color = 'red';
	});
	element.addEventListener('mouseout', function() {
		this.style.color = 'black';
	});
	element.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.style['text-decoration'] = 'underline';
	});
});
