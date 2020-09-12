

window.onload = function() {
    console.log('i work on load!');
    
    var divs = document.getElementsByTagName("div");
    
    for(var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "red";
    }
}


document.getElementById("change_color").addEventListener("click", changeColour);


function changeColour() {
    document.getElementById("unique_one").style.backgroundColor = "yellow";
    document.getElementById("unique_two").style.backgroundColor = "green";
    document.getElementById("unique_three").style.backgroundColor = "purple";
}


