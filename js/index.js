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

// 1. keydown
body.addEventListener('keydown', function() {
	this.style.backgroundColor = 'skyblue';
});

