function generetMotDePass(length: number ,includeNumbers: boolean, includeSymbols: boolean, includeUppercase: boolean): string
{
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '@#$%^&*()_+~';  
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    let characters = lowercase[Math.floor(Math.random() * lowercase.length)];  
     if (includeNumbers) {
    // if (window.confirm("do you want add number")){
        characters += numbers[Math.floor(Math.random() * numbers.length)];
    
    }
    // }
    if (includeSymbols) {
        characters += symbols[Math.floor(Math.random() * symbols.length)];     // Symbole
    }
    if (includeUppercase) {
        characters += uppercase[Math.floor(Math.random() * uppercase.length)]; // Majuscule
    }   

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

      return password;
}

const lenPass = parseInt(prompt("Entrez la longueur du mot de passe") || '12');
if( lenPass > 10 && lenPass < 25 ){
const password = generetMotDePass(lenPass, true, true, true);
console.log(password);
}else{
console.error( "la longueur de mot de pass doit etre entre 12 et 25") ;
}




 
