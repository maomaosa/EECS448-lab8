

function changeColor()
{
    var text = document.getElementById("dummy-text")
    var borderRed = document.getElementById("b-red").value
    var borderBlue = document.getElementById("b-blue").value
    var borderGreen = document.getElementById("b-green").value
    var borderWidth = document.getElementById("b-width").value
    var backgroundRed = document.getElementById("bg-red").value
    var backgroundBlue = document.getElementById("bg-blue").value
    var backgroundGreen = document.getElementById("bg-green").value
    text.style.borderColor = "rgb(" + borderRed + "," + borderGreen + "," + borderBlue + ")"
    text.style.borderWidth = borderWidth +"px"
    text.style.backgroundColor = "rgb(" + backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")"
}