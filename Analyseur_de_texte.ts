function textAnalizer(text: string): void
{
    
    // 1. Compter le nombre de mots
    const mots = text.match(/\b\w+\b/g);
    const nbMots = mots ? mots.length : 0;

   // 2. Compter le nombre de phrases
    const phrases = text.match(/[.!?]/g);
    const nbPhrases = phrases ? phrases.length : 0;

/*    for (let i = 1; i < text.length; i++){
        if (text.charAt(i) == " ") {
          mot++;
        } 
*/

    // 3. Analyser la fréquence des lettres
    const frequenceLettres: { [key: string]: number } = {};
    for (const lettre of text.toLowerCase()) {
        if (/[a-z]/.test(lettre)) {  // Vérifier si c'est une lettre
            frequenceLettres[lettre] = (frequenceLettres[lettre] || 0) + 1;
            
        }
    }
    // 4. Trouver les mots les plus utilisés
    const frequenceMots: { [key: string]: number } = {};
    if (mots) {
        mots.forEach(mot => {
            const motMinuscule = mot.toLowerCase();
            frequenceMots[motMinuscule] = (frequenceMots[motMinuscule] || 0) + 1;
        });
    }

 // Trier les mots les plus fréquents
    const motsTries: [string, number][] = Object.entries(frequenceMots).sort((a, b) => b[1] - a[1]);

    // 5. Afficher les résultats
    console.log("Résumé du texte analysé :");
    console.log(`- Nombre de mots : ${nbMots}`);
    console.log(`- Nombre de phrases : ${nbPhrases}`);
    console.log(`- Fréquence des lettres : `);
    for (const [lettre, freq] of Object.entries(frequenceLettres)) {
        console.log(`   ${lettre}: ${freq}`);
    }
    console.log(`- Mots les plus utilisés : `);
    motsTries.slice(0, 5).forEach(([mot, freq]) => {
        console.log(`   ${mot}: ${freq}`);
    });
}

const texte: string = "TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.";
textAnalizer(texte);