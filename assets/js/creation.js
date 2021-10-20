

// creation de formulaire
var form = document.createElement("form");
document.body.appendChild(form);
// creation div
var div1 = document.createElement("div");
form.appendChild(div1);
var div2 = document.createElement("div");
form.appendChild(div2);
var div3 = document.createElement("div");
form.appendChild(div3);

// DEBUT DIV 1
// creation input nom
var nomperso = document.createElement("input");
div1.appendChild(nomperso);
nomperso.setAttribute("placeholder", "Nom Perso")


// creation input age
var ageperso = document.createElement("input");
div1.appendChild(ageperso);
ageperso.setAttribute("placeholder", "Age Perso")


// label pour le selecteur race


// selection race
var selectRace = document.createElement("select");
var option1 = document.createElement("option");
var option2 = document.createElement("option");
var option3 = document.createElement("option");
var option4 = document.createElement("option");

// creation options
option1.value = "Necromancer";
option1.text = "Necromancer";

option2.value = "Knight";
option2.text = "Knight";

option3.value = "Demon";
option3.text = "Demon";

option4.value = "Mage";
option4.text = "Mage";

// ajout options a select
selectRace.add(option1);
selectRace.add(option2);
selectRace.add(option3);
selectRace.add(option4);

div1.appendChild(selectRace);

// FIN DIV 1

//DEBUT DIV 2 

// selection Equipement
var selectEquip = document.createElement("select");
var optionE1 = document.createElement("option");
var optionE2 = document.createElement("option");
var optionE3 = document.createElement("option");
var optionE4 = document.createElement("option");
var optionE5 = document.createElement("option");
var optionE6 = document.createElement("option");



optionE1.value = "Épée à deux mains";
optionE1.text = "Épée à deux mains";

optionE2.value = "Bouclier";
optionE2.text = "Bouclier";

optionE3.value = "Épée à une main";
optionE3.text = "Épée à une main";


optionE4.value = "Staff";
optionE4.text = "Staff";


optionE5.value = "Arc";
optionE5.text = "Arc";

selectEquip.add(optionE1);
selectEquip.add(optionE2);
selectEquip.add(optionE3);
selectEquip.add(optionE4);
selectEquip.add(optionE5);


div2.append(selectEquip);

// selection pouvoir special

var selectPouv = document.createElement("select");
var optionP1 = document.createElement("option");
var optionP2 = document.createElement("option");
var optionP3 = document.createElement("option");
var optionP4 = document.createElement("option");

optionP1.value = "Eclipse";
optionP1.text = "Eclipse";

optionP2.value = "Reaper's Scythe";
optionP2.text = "Reaper's Scythe";

optionP3.value = "Dragon Form";
optionP3.text = "Dragon Form";


optionP4.value = "Requiem of Souls";
optionP4.text = "Requiem of Souls";


selectPouv.add(optionP1);
selectPouv.add(optionP2);
selectPouv.add(optionP3);
selectPouv.add(optionP4);

div2.append(selectPouv);

var pv = document.createElement("input");
pv.type = "number";
pv.min = "50";
pv.max = "200";
pv.setAttribute("placeholder", "Choix PV")

div2.append(pv);

// FIN DIV 2


//Creation buton de validation 
var btnConf = document.createElement("BUTTON");
btnConf.innerHTML = "Creer";
btnConf.setAttribute("type", "button");
btnConf.setAttribute("onclick", "ajouter(), AffichagePerso()");

div3.appendChild(btnConf);



// definition classe 

class Personnage {
    constructor(nom, age, race, arme, pouvoir, pv) {
        this.nom = nom;
        this.age = age;
        this.race = race;
        this.arme = arme;
        this.pouvoir = pouvoir;
        this.pv = pv;
    }
};


const persoFull = [];

function ajouter() {

    if (pv.value < 50 || pv.value > 200) {
        alert(`On t'as dis entre 50 et 200 Ducon! Retourne en maternelle! Même mon gosse y arrive!`);
        return;
    };
    if (ageperso.value == '') {
        alert(`Jte savais jeune, mais au point de pas avoir d'avoir d'âge. La franchement, GG!`);
        return;
    };
    var personnage = new Personnage();

    personnage.nom = nomperso.value;
    personnage.age = ageperso.value;
    personnage.race = selectRace.value;
    personnage.arme = selectEquip.value;
    personnage.pouvoir = selectPouv.value;
    personnage.pv = pv.value;
    persoFull.push(personnage);
    console.log(persoFull);
};


// Affichage des persos 
function AffichagePerso() {
    var characterUl = document.getElementById('characterUl');
    var text = ''
    for (let i = 0; i < persoFull.length; i++) {
        text += `<li><ul><li>` + persoFull[i].nom + `</li><li>` + persoFull[i].pv + `/` + persoFull[i].pv + `</li></ul></li>`;
    }
    characterUl.innerHTML = text;
}



// Mise en place du départ de jeu
var start = false;

function Start() {
    if (persoFull.length >= 3) {
        start = true;
        brnStop.style.display = 'inline';
        brnStart.style.display = 'none';
    } else {alert(`Vous avez besoin d'au moins 3 personnages avant de commencer à jouer`)}
}

function Stop() {
    start = false;
    brnStop.style.display = 'none';
    brnStart.style.display = 'inline';
}

var brnStart = document.createElement("BUTTON");
brnStart.innerHTML = "START";
brnStart.setAttribute("type", "button");
brnStart.setAttribute("id", "start");
brnStart.setAttribute("onclick", "Start()");
document.getElementById('characterList').appendChild(brnStart);

var brnStop = document.createElement("BUTTON");
brnStop.innerHTML = "STOP";
brnStop.setAttribute("type", "button");
brnStop.setAttribute("id", "stop");
brnStop.setAttribute("onclick", "Stop()");
brnStop.style.display = 'none';
document.getElementById('characterList').appendChild(brnStop);