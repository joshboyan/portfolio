/*You can have as many different javascript files as you like. 
They will all be compiled to ES5, concantenated and linted for the dev build and
minified with comments removed for the dist build.*/

//navigation fades in on scroll
document.onscroll= () =>{ document.querySelector('#navbar').className='navbar visible';};
//submenu slides down when user clicks developers link
document.querySelector('.closed').onclick = () => { document.querySelector('#submenu').classList.toggle("slideDown");};
//mobile menu animations
document.querySelector('#mobileTrigger').onclick = function() { 
	//mobile nav div slide into viewport
	document.querySelector('.mobileNav').classList.toggle('slideOut');
	//mobil nav trigger animations
	document.querySelector('#mobileTrigger i').classList.toggle('spinner');
	document.querySelector('#mobileTrigger i').classList.toggle('fa-bars')
	document.querySelector('#mobileTrigger i').classList.toggle('fa-times');
};
document.querySelector('.mobileNav').onclick = function() {
	//mobile nav div slide into viewport
	document.querySelector('.mobileNav').classList.toggle('slideOut');
	//mobil nav trigger animations
	document.querySelector('#mobileTrigger i').classList.toggle('spinner');
	document.querySelector('#mobileTrigger i').classList.toggle('fa-bars')
	document.querySelector('#mobileTrigger i').classList.toggle('fa-times');
};
//default process slide position
var current = 1;

//process slide animation classes
function changeSlide(current) {
	//stop wiggle signifier
	document.querySelector('#control0').className="control";
	document.querySelector('#control5').className="control";
	for(let i = 1; i < 5; i++) {
		//console.log(`#control${i}`);
		//remove animation classes from every slide
		document.querySelector(`#control${i}`).className="control";
		document.querySelector(`#process${i}`).className=`process${i}`;
		document.querySelector(`#process${i} h4`).className="";
	}
	//add animation classes to current slide	
	document.querySelector(`#control${current}`).className="control controlAnimation";
	document.querySelector(`#process${current}`).className=`process${current} processAnimation`;
	document.querySelector(`#process${current} h4`).className="control backgroundAnimation";
}

//user clicks on particular slide
function currentSlide(slide) {
	current = slide;
	//console.log(`This is slide ${current}`);
	changeSlide(current);
}

//move to the next slide, if at the last slide start over
function nextSlide() {
	if(current < 4) {
		current++;
	} else {
		current = 1;
	}
	changeSlide(current);
}

//move to the previous slide, if at the first slide got to the end
function prevSlide() {
	if(current > 1) {
		current--;
	} else {
		current = 4;
	}
	changeSlide(current);
}
 