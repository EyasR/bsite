// Wipe the console clean so he doesn't see our tracks
console.clear();
console.log("%cWARNING: Unauthorized access will be logged.", "color: red; font-size: 16px; font-weight: bold;");

// Fragment 3: He knows char codes. Let's see if he can reverse this array back into a string in his console!
window.encryptedFragment = [67, 121, 98, 101, 114]; 

// Fragment 4: We silently write this to the browser's Session Storage, then remove the evidence from the script.
sessionStorage.setItem("Fragment_4", "Ninja");

// A little interactive easter egg for the console
window.hack = function() {
  return "Nice try, Bodie. But you have to find the 4 fragments to build the final passphrase.";
}

// Listen for a specific keystroke combo (Ctrl + Space)
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.code === "Space") {
    console.log("Shortcut activated. Did you check the Session Storage in your Application tab?");
  }
});

// --- AUTHORIZATION MODULE LOGIC ---

const inputField = document.getElementById("passphrase-input");
const unlockBtn = document.getElementById("unlock-btn");
const successMsg = document.getElementById("success-message");
const authModule = document.getElementById("auth-module");

// The target passphrase ("alienbountycyberninja") converted into an 8-bit binary sequence.
// Even if he reads the JS code, he just sees a wall of 1s and 0s!
const lockedTarget = "011000010110110001101001011001010110111001100010011011110111010101101110011101000111100101100011011110010110001001100101011100100110111001101001011011100110101001100001";

const checkPassphrase = () => {
  // 1. Get his guess, remove spaces, and make it lowercase
  const guess = inputField.value.toLowerCase().replace(/\s+/g, '');
  
  // 2. Convert his guess into a binary string
  // It grabs each character's code, turns it into base-2 (binary), and pads it to 8 digits
  const guessBinary = guess.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join('');
  
  // 3. Compare the two binary strings
  if (guessBinary === lockedTarget) {
    // Hide the input module
    authModule.classList.add("hidden");
    
    // Show the success message
    successMsg.classList.remove("hidden");
    successMsg.innerHTML = "ACCESS GRANTED.<br>GHOST PROTOCOL DEACTIVATED.<br><br>Excellent work, Agent Bodie.<br>Reward: Choose your next project!";
  } else {
    // If he gets it wrong, clear the box and show an error
    inputField.value = "";
    inputField.placeholder = "ACCESS DENIED. TRY AGAIN.";
    setTimeout(() => {
        inputField.placeholder = "Enter fragments here...";
    }, 2000);
  }
};

// Listen for a click on the AUTHORIZE button
unlockBtn.addEventListener("click", checkPassphrase);

// Also listen for the 'Enter' key inside the text box
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPassphrase();
  }
});