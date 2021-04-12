let selectFont = document.getElementById("selectFont");

// set default to Times New Roman
selectFont.value = "Times New Roman";
editArea.style.fontFamily = "Times New Roman";

selectFont.addEventListener("change", function() {
    if(selectFont.value == "Times New Roman")
    {
        editArea.style.fontFamily = "Times New Roman";
    } 
    else if (selectFont.value == "Arial") 
    {
        editArea.style.fontFamily = "Arial";
    } 
    else if (selectFont.value == "Verdana") 
    {
        editArea.style.fontFamily = "Verdana";
    } 
    else if (selectFont.value == "Helvetica") 
    {
        editArea.style.fontFamily = "Helvetica";
    } 
    else if (selectFont.value == "Tahoma") 
    {
        editArea.style.fontFamily = "Tahoma";
    } 
    else if (selectFont.value == "Trebuchet MS") 
    {
        editArea.style.fontFamily = "Trebuchet MS";
    } 
    else if (selectFont.value == "Georgia") 
    {
        editArea.style.fontFamily = "Georgia";
    } 
    else if (selectFont.value == "Garamond") 
    {
        editArea.style.fontFamily = "Garamond";
    } 
    else if (selectFont.value == "Courier New") 
    {
        editArea.style.fontFamily = "Courier New";
    } 
    else if (selectFont.value == "Brush Script MT") 
    {
        editArea.style.fontFamily = "Brush Script MT";
    }
});