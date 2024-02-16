// typewriter.js

export const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];

export let i = 0;
export let j = 0;
export let currentWord = "";
export let isDeleting = false;

export function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}
