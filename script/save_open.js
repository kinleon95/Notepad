// input event argument
var inputEvent = new Event('input', {
	bubbles: true,
	cancelable: true,
});

let closeHTML = document.getElementById("closeHTML");
let saveHTML = document.getElementById("saveHTML");
// download raw html element to be use again in notepad app
saveHTML.addEventListener("click", function() {

	let htmlInput = document.getElementById("htmlInput").value;
	if (htmlInput.trim() === '') {
		htmlInput = "Notepad";
	}
	if (editArea.innerHTML.trim() === '') {
		alert("No text to save");
	} else {
		let blob = new Blob([localStorage.getItem("Notes")], {type: "text/html"});
		let saveLink = document.createElement("a");
		saveLink.href = URL.createObjectURL(blob);
		saveLink.download = htmlInput + ".html";
		saveLink.hidden = true;
		document.body.appendChild(saveLink);
		saveLink.innerHTML = "_";
		saveLink.click();
		closeHTML.click();
		$('#htmlModalCenter #htmlInput').val("");
	}
	
});

let closeText = document.getElementById("closeText");
let saveText = document.getElementById("saveText");
// download text from notepad app which use the value from removeTag function
saveText.addEventListener("click", function() {

	let textInput = document.getElementById("textInput").value;
	if (textInput.trim() === '') {
		textInput = "Note";
	}
	if (editArea.innerHTML.trim() === '') {
		alert("No text to save"); 
	} else {
		let blob = new Blob([textSave], {type: "text/txt"});
		let saveLink = document.createElement("a");
		saveLink.href = URL.createObjectURL(blob);
		saveLink.download = textInput + ".txt";
		saveLink.hidden = true;
		document.body.appendChild(saveLink);
		saveLink.innerHTML = "_";
		saveLink.click();
		closeText.click();
		$('#textModalCenter #textInput').val("");
	}
	
});

let openBtn = document.getElementById("openBtn");
openBtn.addEventListener("change", function() {
	
	let fileLower = openBtn.value.toLowerCase();
	if (!(fileLower.endsWith('.txt')) && !(fileLower.endsWith('.html'))) {

		alert('Please open text or html file only');

	} else {

		var fRead = new FileReader();

		fRead.onload=function() {
			editArea.innerHTML = fRead.result;
			// trigger input event save to localStorage
			editArea.dispatchEvent(inputEvent);
		}

		fRead.readAsText(this.files[0]);
	}
	
});

// display the name of the file appear on select
$(".custom-file-input").on("change", function() {
	var fileName = $(this).val().split("\\").pop();
	$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
// clear name when reload
openBtn.value = "";
$('#htmlModalCenter #htmlInput').val("");
$('#textModalCenter #textInput').val("");