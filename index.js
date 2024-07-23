colors = ["red", "blue", "yellow", "lightgreen", "grey", "cyan", "aquamarine"];
box = document.getElementById("bgbox");
colorlabel = document.getElementById("color");
function change() {
    color = Math.floor(Math.random()* colors.length) ;
    box.style.backgroundColor = colors[color];
    colorlabel.innerHTML = colors[color];
}

input = document.getElementById("inputb");
msgs = ["how are you?", "what is your name?", "where are you from?"]
function check(bool) {
    if (bool) {
        ispresent = inArray(input.value, msgs);
        if (ispresent) {
            alert("Accepted");
        }
        else {
            alert("Declined");
        }
        input.value = "";
    }
    else {
        input.value = "";
    }
}

function inArray(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}