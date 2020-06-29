const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber){
	const image = new Image();
	image.src = `images/${imgNumber+1}.jpg`;
	image.classList.add("bgImage");
	body.appendChild(image);
}

function genRandom(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;
}
// Math.floor(바닥)이면 소수점있음 짤라버림
// Math.ceil(ceiling천장)이면 소수점있음 올림해버림

function init(){
	const randomNumber = genRandom();
	paintImage(randomNumber);
}

init();