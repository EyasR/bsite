console.clear();
console.log("%cWARNING: Unauthorized access will be logged.", "color: red; font-size: 16px; font-weight: bold;");

window.encryptedFragment = [67, 121, 98, 101, 114]; 


const frag4Binary = ["01001110", "01101001", "01101110", "01101010", "01100001"];
const decodedFrag4 = frag4Binary.map(b => String.fromCharCode(parseInt(b, 2))).join('');
sessionStorage.setItem("Fragment_4", decodedFrag4);


window.hack = function() {
  return "Nice try. But you have to find the 4 fragments to build the final passphrase.";
};


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
    authModule.classList.add("hidden");
    successMsg.classList.remove("hidden");
    successMsg.innerHTML = "ACCESS GRANTED.<br>GHOST PROTOCOL DEACTIVATED.<br><br>Excellent work, Agent.<br>Reward: Choose your next project!";
  } else {

    inputField.value = "";
    inputField.placeholder = "ACCESS DENIED. TRY AGAIN.";
    setTimeout(() => {
        inputField.placeholder = "Enter fragments here...";
    }, 2000);
  }
};

unlockBtn.addEventListener("click", checkPassphrase);

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPassphrase();
  }
});