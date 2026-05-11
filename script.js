
console.clear();
console.log("%cWARNING: Unauthorized access will be logged.", "color: red; font-size: 16px; font-weight: bold;");


window.encryptedFragment = [67, 121, 98, 101, 114]; 


sessionStorage.setItem("Fragment_4", "Ninja");

window.hack = function() {
  return "Nice try, Bodie. But you have to find the 4 fragments to build the final passphrase.";
}


document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.code === "Space") {
    console.log("Shortcut activated. Did you check the Session Storage in your Application tab?");
  }
});



const inputField = document.getElementById("passphrase-input");
const unlockBtn = document.getElementById("unlock-btn");
const successMsg = document.getElementById("success-message");
const authModule = document.getElementById("auth-module");


const lockedTarget = "011000010110110001101001011001010110111001100010011011110111010101101110011101000111100101100011011110010110001001100101011100100110111001101001011011100110101001100001";

const checkPassphrase = () => {

  const guess = inputField.value.toLowerCase().replace(/\s+/g, '');

  const guessBinary = guess.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join('');
  

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