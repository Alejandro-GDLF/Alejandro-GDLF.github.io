Cargar('./html/overworld.html', 'productos_section');

function cambiarTab(event) {
let tab = {
    "overworld-a":"./html/overworld.html",
    "nether-a": "./html/nether.html",
    "end-a":"./html/end.html"
}

let id = event.target.id;

Cargar(tab[id], "productos_section");

// Remove active class for all instances of the div.
let div_row = document.getElementById("pseudoheader-row");

for(let i = 0; i < div_row.childNodes.length; i++){
    let div = div_row.childNodes[i];
    try{
    if (div.classList.contains("active")){
        div.classList.remove("active");
        div.removeChild(document.getElementById("steve-indicator"));
    }
    }catch(smt){}
}
event.target.parentElement.classList.add("active");
event.target.parentElement.innerHTML += '<img id="steve-indicator" class="steve-face" src="./resources/steve-face.png" alt=".."/>';
}