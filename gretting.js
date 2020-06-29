const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
	localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
	// 지금 설정된 서브밋디폴트는 작성데이터를 어딘가로 날려보내고 새로고침함
	// 정해지지도 않은 곳으로 보내버리고 새로고침 하는 디폴트 기능을 꺼버리는것
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName(){
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`;
}

function loadName(){
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null){
		askForName();
	}else{
		paintGreeting(currentUser);
	}
}

function init(){
	loadName();
}

init();