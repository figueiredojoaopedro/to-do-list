var button = document.querySelector("#enter")
var enterInput = document.querySelector("#userinput")
var ul = document.querySelector("ul")
var list = document.querySelectorAll("li")
var deleteButton = document.querySelectorAll(".part-of-list")

var lengthDetector = () => enterInput.value.length


var deleting = (event) => {

}

function deleteButtonOnClick() {
	for(var i = 0; i < deleteButton.length; i++){
		deleteButton[i].addEventListener("click", deleting)
	}
}

function createLi() {
	var text = enterInput.value
	var div = document.createElement("div")
	var li = document.createElement("li")
	var buttonDel = document.createElement("button")
	buttonDel.appendChild(document.createTextNode("Delete"))
	li.appendChild(document.createTextNode(text))
	li.appendChild(buttonDel)
	div.appendChild(li)
	div.classList.add("part-of-list")
	ul.appendChild(div)
	enterInput.value = ''
}

function addNewElement(){
	if (lengthDetector() > 0){
		createLi()
		deleteButtonOnClick()
	}
	else{
		console.log("Not a string bro!")
		alert("Could you input at least one letter?!")
	}
}



button.addEventListener("click", addNewElement)
