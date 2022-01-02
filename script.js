var input = document.querySelector("#userinput")
var button = document.querySelector("#enter")
var table = document.querySelector("table")

// function length to show up the length of the string inputed
var length = () => {return input.value.length}

function nextStep(){
}

function addingElement(){
	var text = input.value
	var td = document.createElement("td")
	var tr = document.createElement("tr")
	var nextButton = document.createElement("button")
	nextButton.innerHTML = "next column"

	td.appendChild(document.createTextNode(text))
	td.appendChild(nextButton)
	tr.appendChild(td)
	table.appendChild(tr)
	input.value = ''
}
function checkingLength(){
	if(length() > 0){
		addingElement()
	}
	else{
		alert("Please, enter a word with at least one letter.")
	}
}

// in case of the button being clicked, 
button.addEventListener("click", checkingLength)
