var input = document.querySelector("input");
var button = document.getElementById("enterInput");
var ul = document.querySelector("ul");

var lengthDetector = () => input.value.length

// from stackoverflow that i took from a github repository
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}
// creating the element 
function createListElement(){
	var text = input.value;
	var li = document.createElement("li");
	var delBttn = document.createElement("button");
	var div = document.createElement("div");
	var checkInput = document.createElement("input")
	checkInput.type = 'checkbox'
	checkInput.classList.add("checkbox")
	delBttn.appendChild(document.createTextNode("Delete!"))
	li.appendChild(document.createTextNode(text));
	div.appendChild(checkInput);
	div.appendChild(li);
	div.appendChild(delBttn);
	ul.appendChild(div);
	delBttn.onclick = removeParent;
	input.value = ''
}
//adding the element
function addElement(){
	if (lengthDetector() > 0){
		createListElement();
	}
	else{
		console.log("Not a string");
		alert("Please, could you type at least one letter?");
	}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addElement);
input.addEventListener("keypress", addToListAfterKeypress);