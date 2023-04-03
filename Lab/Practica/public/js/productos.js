Cargar('./html/overworld.html', 'productos_section');

function cambiarTab(event) {
    const tab = {
        "overworld-a":"./html/overworld.html",
        "nether-a": "./html/nether.html",
        "end-a":"./html/end.html"
    }

    const position = {
        "nether-a" : -1,
        "overworld-a" : 0,
        "end-a" : 1
    }

    let id = event.target.id;

    Cargar(tab[id], "productos_section");

    // Remove active class for all instances of the div.
    document.getElementById("wrapper").childNodes.forEach((item) => {
        try {
            item.classList.remove("active");
        }catch(smt){}
    });

    event.target.parentElement.classList.add('active');

    let width = event.target.parentElement.offsetWidth;
    
    document.getElementById("steve-indicator")
        .style.transform = "translateX(" + ((width + 5) * position[id]) + "px)";
}