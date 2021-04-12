// font size
let f = 4;

let boldBtn = document.getElementsByClassName("btn")[5];
boldBtn.addEventListener("click", function(){
	
    document.execCommand("bold");
    editArea.focus();
})

let italicBtn = document.getElementsByClassName("btn")[6];
italicBtn.addEventListener("click", function(){

    document.execCommand("italic");
    editArea.focus();
})

let underlineBtn = document.getElementsByClassName("btn")[7];
underlineBtn.addEventListener("click", function(){

    document.execCommand("underline");
    editArea.focus();
})

let increaseBtn = document.getElementsByClassName("btn")[8];
increaseBtn.addEventListener("click", function(){

    if (f < 7) {
        f++;
    }
    document.execCommand("fontSize", false, f);
    editArea.focus();
})

let decreaseBtn = document.getElementsByClassName("btn")[9];
decreaseBtn.addEventListener("click", function(){

    if (f > 1) {
        f--;
    }
    document.execCommand("fontSize", false, f);
    editArea.focus();
})

let formatBtn = document.getElementsByClassName("btn")[10];
formatBtn.addEventListener("click", function(){

    document.execCommand("removeFormat");
    f = 4;
    editArea.focus();
})

let leftBtn = document.getElementsByClassName("btn")[11];
leftBtn.addEventListener("click", function(){

    document.execCommand("justifyLeft");
    editArea.focus();
})

let centerBtn = document.getElementsByClassName("btn")[12];
centerBtn.addEventListener("click", function(){

    document.execCommand("justifyCenter");
    editArea.focus();
})

let rightBtn = document.getElementsByClassName("btn")[13];
rightBtn.addEventListener("click", function(){

    document.execCommand("justifyRight");
    editArea.focus();
})

let undoBtn = document.getElementsByClassName("btn")[14];
undoBtn.addEventListener("click", function(){

    document.execCommand("undo");
    editArea.focus();
})

let redoBtn = document.getElementsByClassName("btn")[15];
redoBtn.addEventListener("click", function(){

    document.execCommand("redo");
    editArea.focus();
})

let selectBtn = document.getElementsByClassName("btn")[16];
selectBtn.addEventListener("click", function(){

	editArea.focus();
    document.execCommand("selectAll");
})

let copyBtn = document.getElementsByClassName("btn")[17];
copyBtn.addEventListener("click", function(){

    document.execCommand("copy");
    editArea.focus();
})

let deleteBtn = document.getElementsByClassName("btn")[18];
deleteBtn.addEventListener("click", function(){

    document.execCommand("delete");
    editArea.focus();
})

$(document).on('keyup', editArea, function(e){
  
    // tab keycode
    if(e.keyCode == 9){
        
        document.execCommand('insertHTML', false, '&#009');
        //prevent focus to next element
        e.preventDefault();
        editArea.focus();
    }
});