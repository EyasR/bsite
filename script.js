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