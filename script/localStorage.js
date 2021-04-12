(function() {
	var editArea = document.getElementById("noteArea");
	var storeNote = localStorage.getItem("Notes");
	// if note is available from browser then include in notepad
	if (storeNote) {
		editArea.innerHTML = storeNote;
	}

	function saveNote() {
		var newNote = editArea.innerHTML;
		if (storeNote != newNote) {
			// set new input as note to load on next edit
			storeNote = newNote;
			localStorage.setItem("Notes", storeNote);
		}
	}

	editArea.addEventListener('input', saveNote);
	
})();