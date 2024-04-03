// Your code goes here
document.addEventListener('DOMContentLoaded',() =>{
    const element= document.getElementById("text");
    let currentText = element.textContent;
    let newText =currentText.replace("JavaScript is so cool. It lets me add text to my page programmatically.","This is really cool!")
    element.textContent = newText

});