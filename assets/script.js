const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




const precedent = document.querySelector('.arrow_left');
const suivant = document.querySelector('.arrow_right');

let count = 0;



for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add('dot');
	if(count == i){
		dot.classList.add('dot_selected');
	}
	document.querySelector('.dots').appendChild(dot);
}

const dotArray = document.querySelectorAll('.dot');


function changeSlide(sens) {
	dotArray[count].classList.remove('dot_selected');
	count = count + sens;
	if (count > slides.length -1)
		count = 0;
	if (count < 0)
		count = slides.length - 1;
	document.querySelector(".banner-img").src = "assets/images/slideshow/" + slides[count].image;
	document.querySelector('#banner p').innerHTML = slides[count].tagLine;
	dotArray[count].classList.add('dot_selected');
}








precedent.addEventListener('click', ()=>{changeSlide(-1)});
suivant.addEventListener('click', ()=>{changeSlide(1)});


// suivant.addEventListener('click', function(){
// 	console.log('page suivante');
// });

// precedent.addEventListener('click', function(){
// 	console.log('image précedente');
// });
