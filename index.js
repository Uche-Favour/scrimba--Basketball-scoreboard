let homeDisplay = document.getElementById("home_display");
let guestDisplay = document.getElementById("guest_display");
let reset = document.getElementById("reset");

let homeCount = 0;
let guestCount = 0;

function updateDisplay() {
  homeDisplay.textContent = homeCount;
  guestDisplay.textContent = guestCount;
  
  // Update colors based on score comparison
  if (homeCount > guestCount) {
    homeDisplay.style.color = "green";
    guestDisplay.style.color = "red";
  } else if (guestCount > homeCount) {
    homeDisplay.style.color = "red";
    guestDisplay.style.color = "green";
  } else {
    // Equal scores - reset to default
    homeDisplay.style.color = "";
    guestDisplay.style.color = "";
  }
}

function guestAdd1() {
  guestCount += 1;
  updateDisplay();
}

function guestAdd2() {
  guestCount += 2;
  updateDisplay();
}

function guestAdd3() {
  guestCount += 3;
  updateDisplay();
}

function homeAdd1() {
  homeCount += 1;
  updateDisplay();
}

function homeAdd2() {
  homeCount += 2;
  updateDisplay();
}

function homeAdd3() {
  homeCount += 3;
  updateDisplay();
}

reset.addEventListener("click", function() {
  homeCount = 0; 
  guestCount = 0;
  homeDisplay.style.color = "";
  guestDisplay.style.color = "";
  homeDisplay.textContent = homeCount;
  guestDisplay.textContent = guestCount;
});