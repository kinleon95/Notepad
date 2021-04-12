let newBtn = document.getElementById("newBtn");

newBtn.addEventListener("click", function() {
	if (confirm("Creating a new note, previous note will be lost")) {
		editArea.innerHTML = "";
		f = 4;
		localStorage.clear();
		removeTag(); // word_count.js function
		document.getElementById("openBtn").value = "";
		document.getElementById("labelOpen").innerHTML = "Open Notes";
	}
});

let printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function() {
	// print only whats on the note editor
	let p = window.open('', '', 'height=500, width=500');
	p.document.write('<html><body>');
	p.document.write(editArea.innerHTML);
	p.document.write('</body></html>');
	p.document.close();
	p.print();
});