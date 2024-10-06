// Fonction pour créer une matrice à partir des dimensions et des éléments saisis
function creerMatrice(lignes: number, colonnes: number): number[][] {
    let matrice: number[][] = [];
    for (let i = 0; i < lignes; i++) {
        let ligne: number[] = [];
        for (let j = 0; j < colonnes; j++) {
            const element = parseFloat(prompt(`Entrez l'élément [${i + 1}, ${j + 1}]: `) || '0');
            ligne.push(element);
        }
        matrice.push(ligne);
    }
    return matrice;
}

// Fonction pour afficher une matrice dans la console
function afficherMatrice(matrice: number[][]): void {
    matrice.forEach(ligne => {
        console.log(ligne.join("\t"));
    });
    console.log(); // Ligne vide pour espacement
}

// Fonction pour additionner deux matrices
function additionMatrices(matrice1: number[][], matrice2: number[][]): number[][] | null {
    const lignes = matrice1.length;
    const colonnes = matrice1[0].length;

    if (lignes !== matrice2.length || colonnes !== matrice2[0].length) {
        console.error("Erreur: Les matrices doivent avoir les mêmes dimensions pour l'addition.");
        return null;
    }

    let resultat: number[][] = [];
    for (let i = 0; i < lignes; i++) {
        let ligne: number[] = [];
        for (let j = 0; j < colonnes; j++) {
            ligne.push(matrice1[i][j] + matrice2[i][j]);
        }
        resultat.push(ligne);
    }
    return resultat;
}

// Fonction pour multiplier deux matrices
function multiplicationMatrices(matrice1: number[][], matrice2: number[][]): number[][] | null {
    const lignesM1 = matrice1.length;
    const colonnesM1 = matrice1[0].length;
    const lignesM2 = matrice2.length;
    const colonnesM2 = matrice2[0].length;

    if (colonnesM1 !== lignesM2) {
        console.error("Erreur: Le nombre de colonnes de la première matrice doit être égal au nombre de lignes de la deuxième.");
        return null;
    }

    let resultat: number[][] = [];
    for (let i = 0; i < lignesM1; i++) {
        let ligne: number[] = [];
        for (let j = 0; j < colonnesM2; j++) {
            let somme = 0;
            for (let k = 0; k < colonnesM1; k++) {
                somme += matrice1[i][k] * matrice2[k][j];
            }
            ligne.push(somme);
        }
        resultat.push(ligne);
    }
    return resultat;
}

// Fonction principale pour orchestrer les opérations
function main(): void {
    // Création de la première matrice
    const lignes1 = parseInt(prompt("Entrez le nombre de lignes de la première matrice: ") || '0');
    const colonnes1 = parseInt(prompt("Entrez le nombre de colonnes de la première matrice: ") || '0');
    const matrice1 = creerMatrice(lignes1, colonnes1);

    console.log("Première matrice:");
    afficherMatrice(matrice1);

    // Création de la deuxième matrice
    const lignes2 = parseInt(prompt("Entrez le nombre de lignes de la deuxième matrice: ") || '0');
    const colonnes2 = parseInt(prompt("Entrez le nombre de colonnes de la deuxième matrice: ") || '0');
    const matrice2 = creerMatrice(lignes2, colonnes2);

    console.log("Deuxième matrice:");
    afficherMatrice(matrice2);

    // Addition des matrices
    if (lignes1 === lignes2 && colonnes1 === colonnes2) {
        console.log("Résultat de l'addition des matrices:");
        const matriceAddition = additionMatrices(matrice1, matrice2);
        if (matriceAddition) {
            afficherMatrice(matriceAddition);
        }
    } else {
        console.log("L'addition des matrices n'est pas possible car les dimensions ne sont pas compatibles.");
    }

    // Multiplication des matrices
    if (colonnes1 === lignes2) {
        console.log("Résultat de la multiplication des matrices:");
        const matriceMultiplication = multiplicationMatrices(matrice1, matrice2);
        if (matriceMultiplication) {
            afficherMatrice(matriceMultiplication);
        }
    } else {
        console.log("La multiplication des matrices n'est pas possible car les dimensions ne sont pas compatibles.");
    }
}

// Lancer la fonction principale
main();
