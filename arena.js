

function chooseArena(){
    var arena = document.getElementById("map-select");
    var choix = arena.value;

var div = document.getElementById("imgarene")

switch (choix) {
    case "namek":
        div.style.backgroundImage = "url('img-arene/namek.png')";
        break;
    case "glaciale":
        div.style.backgroundImage = "url('img-arene/ice_map.PNG')";
        break;

    case "jungle":
        div.style.backgroundImage = "url('img-arene/map_jungle.PNG')";
        break;

    case "nocturne":
        div.style.backgroundImage = "url('img-arene/nuit.png')";
        break;

    default:
        console.log("nothing");


    }

}


















// if arena.value = choix
