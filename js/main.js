var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors

var pic = document.querySelector('#main-shoe');
var pink = document.querySelector('.pink');
var purp = document.querySelector('.purp');
var blue = document.querySelector('.blue');
var white = document.querySelector('.white');
var black = document.querySelector('.black');
var gray = document.querySelector('.gray');
var rat = document.querySelector('.rat');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [
	
	{	
		src: "images/products/pink.png"
	},
	{
		src: "images/products/purple.png"
	},
	{
		src: "images/products/blue.png"
	},
	{
		src: "images/products/white.png"
	},
	{
		src: "images/products/black.png"
	},
	{
		src: "images/products/Gray.png"
	},
	{
		src: "images/products/rat.png"
	}
]

// Change Color
pink.addEventListener("click", function() {
	pic.src = info[0].src;
})
purp.addEventListener("click", function() {
	pic.src = info[1].src;
})
blue.addEventListener("click", function() {
	pic.src = info[2].src;
})
white.addEventListener("click", function() {
	pic.src = info[3].src;
})
black.addEventListener("click", function() {
	pic.src = info[4].src;
})
gray.addEventListener("click", function() {
	pic.src = info[5].src;
})
rat.addEventListener("click", function() {
	pic.src = info[6].src;
})