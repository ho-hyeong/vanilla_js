const title2 = document.getElementById("title");
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
	title.classList.toggle(CLICKED_CLASS);
	/* classList.toggle이 밑에 주석부분의 일을 함...
		클래스 리스트에CLICKED_CLASS가잇으면 지우고 없으면 추가
	const hasClass = title.classList.contains(CLICKED_CLASS);
	if(hasClass){
		title.classList.remove(CLICKED_CLASS);
	}else{
		title.classList.add(CLICKED_CLASS);		
	}
	*/
}
function init(){
	title.addEventListener("click",handleClick);
}
init();
/*
console.dir(title);

title.innerHTML = "메인바디안쪽에 타이틀 내용을 변경";
title.style.color = "red";// title변수에는 html의 ID타이틀이 선택되어있음 거기서 
							//	스타일겍체의 컬러겍체를 레드로 바꾼거
document.title = "haha"; // document=이 문서 .title=이 문서의 타이틀 이걸 하하로 변경




// 이벤트가 실행이되면 event에 실행된 이벤트의 객체정보가 들어온다
function colorRe(event){
	title.style.color = "red";
	console.log(event);
}

// 밑에 함수쓰이는 부분에 ()가 없는이유는 colorRe()라고쓰면 
// 이벤트 클릭을 안기다리고 그냥 바로 함수가 실행된다
// 함수명만 쓸경우 이벤트가 발생하고나서 함수가 실행됨
title.addEventListener("click",colorRe);

*/











