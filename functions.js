function mouseEnter(valor) {
    if (valor == 1) {
        document.getElementById("um"  ).style.backgroundColor = "rgb(255, 68, 68";
        document.getElementById("dois").style.backgroundColor = "black";
        document.getElementById("tres").style.backgroundColor = "black";
    } if (valor == 2) {
        document.getElementById("dois").style.backgroundColor = "rgb(255, 68, 68";
        document.getElementById("um"  ).style.backgroundColor = "black";
        document.getElementById("tres").style.backgroundColor = "black";
    } if (valor == 3) {
        document.getElementById("tres").style.backgroundColor = "rgb(255, 68, 68";
        document.getElementById("um"  ).style.backgroundColor = "black";
        document.getElementById("dois").style.backgroundColor = "black";
    }
}