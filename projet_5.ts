// Fonction pour générer un plateau avec des cases spéciales
function creerPlateau(n: number): string[] {
    const plateau: string[] = Array(n).fill("rien");
    
    // On introduit quelques cases spéciales de manière aléatoire
    plateau[Math.floor(Math.random() * n)] = "gagne un tour";
    plateau[Math.floor(Math.random() * n)] = "perd un tour";
    plateau[Math.floor(Math.random() * n)] = "avancer de 3 cases";
    plateau[Math.floor(Math.random() * n)] = "reculer de 3 cases";
    
    return plateau;
}

// Fonction pour simuler un lancer de dés (entre 1 et 6)
function lancerDes(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// Classe représentant un joueur
class Joueur {
    nom: string;
    position: number;
    toursSautes: number;

    constructor(nom: string) {
        this.nom = nom;
        this.position = 0;
        this.toursSautes = 0; // Nombre de tours à sauter à cause des cases spéciales
    }

    // Déplacer le joueur
    deplacer(des: number, plateau: string[]): void {
        if (this.toursSautes > 0) {
            console.log(`${this.nom} perd ce tour (tours restants à sauter : ${this.toursSautes})`);
            this.toursSautes--;
            return;
        }

        console.log(`${this.nom} lance un ${des}`);
        this.position += des;

        // Si le joueur dépasse le plateau, il reste sur la dernière case
        if (this.position >= plateau.length) {
            this.position = plateau.length - 1;
            console.log(`${this.nom} est arrivé à la fin du plateau!`);
        } else {
            console.log(`${this.nom} se déplace à la case ${this.position}.`);
        }

        this.gererCaseSpeciale(plateau);
    }

    // Gérer les effets des cases spéciales
    gererCaseSpeciale(plateau: string[]): void {
        const caseActuelle = plateau[this.position];
        console.log(`${this.nom} atterrit sur une case : ${caseActuelle}`);

        switch (caseActuelle) {
            case "gagne un tour":
                console.log(`${this.nom} gagne un tour supplémentaire.`);
                break;
            case "perd un tour":
                this.toursSautes = 1;
                console.log(`${this.nom} doit passer son prochain tour.`);
                break;
            case "avancer de 3 cases":
                this.position += 3;
                if (this.position >= plateau.length) {
                    this.position = plateau.length - 1;
                }
                console.log(`${this.nom} avance de 3 cases supplémentaires. Nouvelle position : ${this.position}`);
                break;
            case "reculer de 3 cases":
                this.position = Math.max(0, this.position - 3);
                console.log(`${this.nom} recule de 3 cases. Nouvelle position : ${this.position}`);
                break;
        }
    }

    // Vérifie si le joueur a terminé le jeu
    aFini(plateau: string[]): boolean {
        return this.position === plateau.length - 1;
    }
}

// Fonction pour démarrer la simulation
function demarrerJeu(nbJoueurs: number, taillePlateau: number): void {
    const plateau = creerPlateau(taillePlateau);
    const joueurs: Joueur[] = [];

    // Initialiser les joueurs
    for (let i = 0; i < nbJoueurs; i++) {
        const nomJoueur = `Joueur ${i + 1}`;
        joueurs.push(new Joueur(nomJoueur));
    }

    let tour = 0;
    let jeuEnCours = true;

    // Boucle principale du jeu
    while (jeuEnCours) {
        console.log(`\n=== Tour ${tour + 1} ===`);
        
        for (const joueur of joueurs) {
            if (!joueur.aFini(plateau)) {
                const des = lancerDes();
                joueur.deplacer(des, plateau);
            } else {
                console.log(`${joueur.nom} a déjà terminé le jeu.`);
            }

            // Si tous les joueurs ont atteint la fin, on arrête le jeu
            if (joueurs.every(j => j.aFini(plateau))) {
                jeuEnCours = false;
                break;
            }
        }

        // Affichage des positions des joueurs après chaque tour
        joueurs.forEach(joueur => {
            console.log(`${joueur.nom} est à la position ${joueur.position}`);
        });

        tour++;
    }

    console.log("\n=== Le jeu est terminé ===");
}

// Paramètres du jeu
const nbJoueurs = 2; // Nombre de joueurs
const taillePlateau = 20; // Nombre de cases sur le plateau

// Lancer le jeu
demarrerJeu(nbJoueurs, taillePlateau);
