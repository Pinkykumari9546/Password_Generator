const passwordBox = document.getElementById("Password");
const length = 12;

const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+{}|<>/[]-=";

const allChars = upperCaseLetter + lowerCaseLetter + number + symbol;

function createPassword(){
    let password = "";
    password += upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)];
    password += lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}