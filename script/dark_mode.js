var editArea = document.getElementById("noteArea");

let darkSwitch = document.getElementById("darkMode");
let darkIcon = document.getElementById("darkIcon");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let paraCount = document.getElementById("wordCount");
let paraTip = document.getElementById("paraTip");

// set attribute of element to go dark mode
// can revert back to light mode

darkSwitch.addEventListener("click", function() {
	if (darkIcon.getAttribute("class") == "fas fa-moon fa-lg px-3") {
		darkIcon.setAttribute("class", "fas fa-sun fa-lg px-3");
		darkIcon.style.color = "white";
		body.setAttribute("class", "bg-dark");
		nav.setAttribute("class", "navbar navbar-expand-sm navbar-dark");
		paraCount.style.color = "white";
		paraTip.setAttribute("class", "text-info");
		editArea.style.color = "#DCDCDC";
		editArea.style.backgroundColor = "#101010";
	} else {
		darkIcon.setAttribute("class", "fas fa-moon fa-lg px-3");
		darkIcon.style.color = "black";
		body.setAttribute("class", "bg-light");
		nav.setAttribute("class", "navbar navbar-expand-sm navbar-light");
		paraCount.style.color = "black";
		paraTip.setAttribute("class", "text-muted");
		editArea.style.color = "black";
		editArea.style.backgroundColor = "#FAFAD2";
	}
});