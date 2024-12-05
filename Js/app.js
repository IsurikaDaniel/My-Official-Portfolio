const typingText = document.getElementById("typing-text");

const words = [
    "Front-End Developer",
    "UI/UX Designer",
    "Back-End Developer",
    "Web Developer",
    "Full-Stack Developer"
];

let wordIndex = 0; // Track the current word
let charIndex = 0; // Track the current character of the word
let isDeleting = false; 
const typingSpeed = 100; 
const deletingSpeed = 50; 
const wordPause = 1000; 

function typeWords() {
    const currentWord = words[wordIndex]; 

    // Add or remove characters based on state
    if (!isDeleting) {
        typingText.textContent = currentWord.slice(0, charIndex++); // Typing characters
    } else {
        typingText.textContent = currentWord.slice(0, charIndex--); // Deleting characters
    }

    // Handle state transitions
    if (charIndex === currentWord.length && !isDeleting) {
        setTimeout(() => (isDeleting = true), wordPause);
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWords, currentSpeed);
}

// Start the typing effect
typeWords();

