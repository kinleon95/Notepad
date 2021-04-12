// save as text required
let textSave = "";

function removeTag () {
	let noteTag = editArea.innerHTML;
	let textCount = "";

	// no duplicates
	textSave = "";

	const tags = [",", ".", "\t", "&nbsp;"];

	// iterate thru innerHTML
	for (let i = 0; i < noteTag.length; i++) {

		// check for new div
		if (noteTag.slice(i, i+4) == "<div") {
			// separate word when enter key(next line)
			textCount += " ";
		}

		// check when theres html element
		if (noteTag.charAt(i) == "<") {
			// start loop, get index of ">"
			for (let n = (i+1); n < noteTag.length; n++) {
				if (noteTag.charAt(n) == ">") {
					// slice opening/closing tag <>
					noteTag = noteTag.slice(n+1);
					// iterate sliced innerHTML from beginning
					i = -1;
					break;
				}
			}
		}
		// iterate thru tags array
		for (let t = 0; t < tags.length; t++) {
			// avoid slice twice in one iteration 
			if (i == -1) {
				break;
			}
			
			if (noteTag.slice(i, i+1) == tags[t]) {

				// separate word when comma/dot, keep for save as text
				textCount += " ";
				textSave += tags[t];
			}
			
			// slice innerHTMl if equal to element from tags array
			if (noteTag.slice(i, i+tags[t].length) == tags[t]) {
				// slice comma/dot and spacing
				noteTag = noteTag.slice(i+tags[t].length);
				
				i = -1;
				break;
			}
		}
		if (i != -1) {
			
			// not(opening/closing tag) keep in textSave/textCount to avoid next slice
			textSave += noteTag.slice(i,i+1);
			textCount += noteTag.slice(i,i+1);
		}
	}
	// process to word count
	let wordSplit = textCount.split(" ");
	let paraCount = document.getElementById("wordCount");

	// remove element from wordSplit that has empty string
	for (let s = 0; s < wordSplit.length; s++) {
		if (wordSplit[s] == "") {
			wordSplit.splice(s, 1);
			s = -1;
		}
	}
	paraCount.innerHTML = "Word Count: " + wordSplit.length;
	//console.log(wordSplit);
}
editArea.addEventListener('input',removeTag);
removeTag();