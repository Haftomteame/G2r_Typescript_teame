// Fonction pour générer le mot masqué (rempli de tirets)
function genererMotMasque(mot: string, lettresDevinees: string[]): string {
    let motMasque = '';
    for (let lettre of mot) {
        if (lettresDevinees.includes(lettre)) {
            motMasque += lettre;
        } else {
            motMasque += '_';
        }
    }
    return motMasque;
}

// Fonction principale du jeu du pendu
function jouerPendu(motADeviner: string, maxErreurs: number): void {
    let erreurs = 0;
    let lettresDevinees: string[] = [];
    let motMasque = genererMotMasque(motADeviner, lettresDevinees);

    while (erreurs < maxErreurs && motMasque !== motADeviner) {
        console.log(`Mot à deviner : ${motMasque}`);
        console.log(`Erreurs : ${erreurs}/${maxErreurs}`);

        // Demander une lettre à l'utilisateur
        let lettre = prompt("Entrez une lettre : ")?.toLowerCase();
        
        if (!lettre || lettre.length !== 1 || !/[a-z]/.test(lettre)) {
            console.log("Veuillez entrer une seule lettre valide.");
            continue;
        }

        // Vérifier si la lettre a déjà été devinée
        if (lettresDevinees.includes(lettre)) {
            console.log(`Vous avez déjà deviné la lettre '${lettre}'.`);
            continue;
        }

        // Ajouter la lettre à la liste des lettres devinées
        lettresDevinees.push(lettre);

        // Vérifier si la lettre est dans le mot à deviner
        if (motADeviner.includes(lettre)) {
            console.log(`Bonne lettre : '${lettre}' est dans le mot !`);
        } else {
            console.log(`Mauvaise lettre : '${lettre}' n'est pas dans le mot.`);
            erreurs++;
        }

        // Mettre à jour le mot masqué
        motMasque = genererMotMasque(motADeviner, lettresDevinees);
    }

    // Vérifier si le joueur a gagné ou perdu
    if (motMasque === motADeviner) {
        console.log(`Félicitations ! Vous avez deviné le mot : ${motADeviner}`);
    } else {
        console.log(`Dommage ! Vous avez perdu. Le mot était : ${motADeviner}`);
    }
}

// Initialisation du jeu
const motADeviner = "typescript";  // Exemple de mot à deviner
const maxErreurs = 6;  // Nombre maximum d'erreurs avant la défaite

// Lancer le jeu
jouerPendu(motADeviner, maxErreurs);
