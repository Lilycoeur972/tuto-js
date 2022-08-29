// Création d'un tableau de chaîne.

const stagiaires=["lita","lilya", "loulou" ];

console.log(stagiaires.length);

console.log(stagiaires.toString())


// Création d'un tabeau avec la boucle for.

for (let index = 0; index < stagiaires.length; index++) {

    console.log(stagiaires[index]);
    
    
}

// Création d'un tableau EN DECLARANT LA VARAIBLE AVEC LET.

let stagiairesV2= ["marion","claude", "sofia", "clémentine"];


// Ecrire l'algorithme permet de changer marion en mario. Valeur de la variable stagiairesv2.

stagiairesV2[0] ="mario";




//  A partir de la fonction findIndex,  modifier sofia en sophie.

let indexSofia = stagiairesV2.findIndex (Item=>Item=="sofia")

console.log(indexSofia)

stagiairesV2.findIndex[2]="sophie"


//Inverser les deux éléments Marion et Claude.

let indexClaude= stagiairesV2.findIndex (Item =>Item== "mario")

console.log(indexClaude)

stagiairesV2.findIndex[-1]="marion"



//Mettre tous les prénoms des stagiaires en majuscules.

stagiairesV2=stagiairesV2.map(Item=>Item.toUpperCase)
