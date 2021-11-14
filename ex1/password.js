function validate()
{
    var password1 = document.getElementsByTagName("input")[0]; //get the first passw
    var password2 = document.getElementsByTagName("input")[1]; //ger the second passw

    if (password1.value.length < 8) // if the first's length < 8
    {
        alert ("The passwords are not at leat 8 characters long!")
    }
    else if (password1.value != password2.value)
    {
        alert ("The passwords are not same, please verify!")
    }
    else
    {
        alert ("Done!")
    }
}