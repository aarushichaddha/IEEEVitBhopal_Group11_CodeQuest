const textElement = document.getElementById('typed-text');
const text = 'I am devil of my world'; // Text to be typed out
const speed = 100; // Speed of typing in milliseconds

let index = 0;
let wordIndex = 0;
let isTyping = true;
const words = text.split(' ');

function typeWord() {
    if (index < words[wordIndex].length) {
        textElement.textContent += words[wordIndex][index];
        index++;
        setTimeout(typeWord, speed);
    } else {
        if (wordIndex < words.length - 1) {
            textElement.textContent += ' '; // Add space between words
            index = 0;
            wordIndex++;
            setTimeout(typeWord, speed);
        } else {
            isTyping = false; // End typing animation
        }
    }
}

typeWord();