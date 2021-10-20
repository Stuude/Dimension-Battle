var raclette = [{ name: "Patate", maxLife: 100, actualLife: 100 }, { name: "Haricot", maxLife: 80, actualLife: 80 }];

function LaFete() {
    var characterUl = document.getElementById('characterUl');
    var text = ''
    for (let i = 0; i < raclette.length; i++) {
        // let newLi = document.createElement("LI");
        // let newUl = document.createElement("UL");
        text += `<li><ul><li>`+raclette[i].name+`</li><li>`+raclette[i].actualLife+`/`+raclette[i].maxLife+`</li></ul></li>`;
    }
    characterUl.innerHTML = text;
}


