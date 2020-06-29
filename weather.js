const weather = document.querySelector(".js-weather");

const API_KEY = "ee3f10930e10eb50177b1182ad4f2366";
const COORDS = 'coords';

function getWeather(lat,lon){
	// fetch는 데이터를 요청해서 가저온다
	// ``를 쓸것
	fetch(			// units=metric는 화씨 24도 이런식으로 온도를 받아온다고 설정
	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
		// 페치에서 정상적으로(전부) 요청한 데이터가 받아지면 then을 실행
	).then(function(response){
		return response.json()
		// json데이터가 준비가 완료되면 다음 then실행
	}).then(function(json){
		// 온도
		const temperature = json.main.temp;
		// 지역이름
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;
	})
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
	// 위도
	const latitude = position.coords.latitude;
	// 경도
	const longitude = position.coords.longitude;
	const coordsObj = {
		// latitude: latitude 와 같음
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude,longitude);
}

function handleGeoError(){
	console.log("Cant access geo location");
}

function askForCoords(){
	// 좌표를 가저올떄 쓰는함수 첫번째는 성공햇을때 두번짼 실패시 실행할 함수
	navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();	
	}else{
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude,parseCoords.longitude);
	}
}

function init(){
	loadCoords();
}

init();