const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
	const date = new Date();
	const hours = date.getHours();
	const minutes  = date.getMinutes();
	const seconds = date.getSeconds();
	clockTitle.innerText = `${
		hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
		}`;
}

function init(){
	// 일단 시간을 받고
	getTime();
	// 매초 (마이크로세컨드 1000 = 1초) 함수를 실행함
	setInterval(getTime, 1000);
}

init();