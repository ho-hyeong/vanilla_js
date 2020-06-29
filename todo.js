const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	// 필터함수는 포이치처럼 배열을 한개씩 실행시킨다
	// (실행시킬함수)를 넣고 실행시키면 기입한 함수가 작동
	// 이떄 인수로 넣을 함수는 블린으로 리턴해야함
	// 트루가 리턴되어오면 트루인 값들만 모아서 새로 배열을 만듬
	const cleanToDos = toDos.filter(function(toDo){
		// parseInt는 스트링을 인트로 바꿔줌
		return toDo.id !== parseInt(li.id);
		// 리턴의 조건으로 실행하면 li.id = 엑스버튼 눌린 li의 id와
		// 같지 않으면 트루 그래서 눌린거 빼고 다시 클린투두에 배열로 정리해줌
	});
	toDos = cleanToDos;
	saveToDos();
			
}

function saveToDos(){
	// 로컬스트리지는 데이터를 스트링타입으로만 저장을해서
	// 만약 true가 값으로 들어가면 문자열 'true'가 들어간다
	// 그래서 JSON.stringify 사용
	// JSON.stringify는 자바스크립 오브젝트를 스트링으로 바꿔줌
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	delBtn.innerText = "❌";
	delBtn.addEventListener("click",deleteToDo);
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId,
		
	};
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	// JSON은 데이터를 전달할때 자바스크립가 그걸 다룰수잇도록 오브젝트로 바꿔주는기능
	if(loadedToDos !== null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		});
	}
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit",handleSubmit);
}

init();