const tabMot = ["détonnellerons", "raffermiraient", "distillassions", "réincorporerez", "récapitulation", "désagençassent", "fourmillassiez"];
const tirage = Math.ceil((Math.random() * 7) - 1); // tabMot.length recupere la longueur du tableau on peut alors recuperer la totatlité du tableaux meme si on le modifie 
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const decoupe = tabMot[tirage].split('');
const motAdeviner = tabMot[tirage];
let tentative = 9;
let tabUnder = [];

for (i = 0; i < decoupe.length; i++) {
    console.log(i);
    tabUnder.push(' _ ');
    document.getElementById('under').innerHTML = document.getElementById('under').innerHTML + ' _ ';
}
console.log(tabUnder);
// alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(tabMot);
console.log(alphabet);
console.log(tabMot[tirage]);
console.log(decoupe);


function test() {
    let entreUtilisateur = document.getElementById('saisiUtilisateur').value.toString();
    console.log(entreUtilisateur);
    let index = decoupe.indexOf(entreUtilisateur);
    let indice = [];
    while (index !== -1) {
        indice.push(index);
        index = decoupe.indexOf(entreUtilisateur, index + 1);
    }
    console.log(indice);


    if (indice.length > 0) {


        console.log('decoupe ok');
        for (let i = 0; i < indice.length; i++) {
            let span = document.createElement("span");
            span.innerText = decoupe[indice[i]];
            reponse = reponse.appendChild(span);
            tabUnder[indice[i]] = entreUtilisateur;
        }

    }

    else {
        console.log('decoupe nok');
        tentative = tentative - 1;
        console.log(tentative + ' tentatives');
    }
    console.log(tabUnder);
    let stocakgeTmp = ""; // initialiser une variable vide pour stocker le mot décortiqué
    for( i = 0 ; i < tabUnder.length ; i++) { // i strictement inférieur car on par de 0
        console.log(tabUnder[i]); 
        
        stocakgeTmp = stocakgeTmp + tabUnder[i]; // on incrémente le stockage temporaire des _ et des bonnes lettres
        console.log(stocakgeTmp); // Affichage en console pour vériification
            }
    document.getElementById('under').innerHTML = stocakgeTmp;  // Remplacement du contenu de la div under par le stockage temporaire

    // var indices = [];
    // var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
    // var élément = 'a';
    // var idx = tableau.indexOf(élément);
    // while (idx != -1) {
    //   indices.push(idx);
    //   idx = tableau.indexOf(élément, idx + 1);
    // }
    // console.log(indices);
    // // [0, 2, 4]
}

document.getElementById("saisiUtilisateur").addEventListener("keyup", test, false);
