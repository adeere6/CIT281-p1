/*
    CIT 281 Project 1
    Name: Allie Deere
*/


let string = ""
let letters = "abcdefghijklmnopqrstuvwxyz"

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomStringLength() {

    for ( var i = 0; i < getRandomInteger(5,26); i++ ) {
        string += letters[getRandomInteger(0,letters.length)]
    }
    return string;
}  
console.log((getRandomStringLength(getRandomInteger(5,26))))



