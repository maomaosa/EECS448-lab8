var array = ["image/meme1.jpg", "image/meme2.jpg", "image/meme3.jpg", "image/meme4.jpg", "image/meme5.jpg"]
var image = document.getElementsByTagName("img")[0];
var index = 0;


function next()
{
    if(index <4)
    {
        index ++;
        image.src = array[index];
    }
    else
    {
        index = 0
        image.src = array[index];
    }
}

function previous()
{
    if(index >0)
    {
        index --;
        image.src = array[index];
    }
    else
    {
        index = 4
        image.src = array[index];
    }
}