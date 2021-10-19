

function chooseArena(){
    var arena = document.getElementById("map-select");
    var choix = arena.value;

var div = document.getElementById("imgarene")    
    
switch (choix) {
    case "Namek":
        div.style.backgroundImage = "url('img-arene/namek.PNG')";
        break;
    case "Glaciale":
        div.style.backgroundImage = "url('img-arene/ice_map.PNG')";
        break;

    case "Jungle":
        div.style.backgroundImage = "url('img-arene/map_jungle.PNG')";
        break;  
        
    case "Nocturne":
        div.style.backgroundImage = "url('img-arene/nuit.PNG')";
        break;

    default:
        console.log("nothing");
        

    }    
    
}















    


// if arena.value = choix