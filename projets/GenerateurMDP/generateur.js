// Sélectionnez les éléments du DOM
const passwordInput = document.querySelector('input[type="text"]');
const copyButton = document.querySelector('.copy-btn');
const generateButton = document.querySelector('.generate-btn');
const passLengthInput = document.querySelector('input[type="number"]');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const excDuplicateCheckbox = document.getElementById('exc-duplicate');
const spacesCheckbox = document.getElementById('spaces');

// Fonction pour générer un mot de passe
function generatePassword() {
    const length = Number(passLengthInput.value);
    const useLowercase = lowercaseCheckbox.checked;
    const useUppercase = uppercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;
    const excludeDuplicate = excDuplicateCheckbox.checked;
    const includeSpaces = spacesCheckbox.checked;

    // Définissez les caractères possibles pour chaque catégorie
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Concaténez les caractères en fonction des paramètres sélectionnés
    let allChars = '';
    if (useLowercase) allChars += lowercaseChars;
    if (useUppercase) allChars += uppercaseChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;
    if (includeSpaces) allChars += ' ';

    // Générez le mot de passe
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Affichez le mot de passe dans l'entrée de texte
    passwordInput.value = password;
}

// Fonction pour copier le mot de passe
function copyPassword() {
    var password = passwordInput.value;
    if (password) {
        navigator.clipboard.writeText(password).then(function() {
            alert('Mot de passe copié dans le presse-papiers !');
        }, function(err) {
            console.error('Impossible de copier le texte: ', err);
        });
    }
}


// Écoutez le clic sur le bouton de génération
generateButton.addEventListener('click', generatePassword);

// Écoutez le clic sur le bouton de copie
copyButton.addEventListener('click', copyPassword);

// Appelez la fonction initiale pour afficher un mot de passe par défaut
generatePassword();
