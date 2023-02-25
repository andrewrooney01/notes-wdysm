// Get the input text element
const inputText = document.getElementById("input-answer");

// Get the add button element
const addButton = document.getElementById("add-button");

// Get the container for the boxes
const boxContainer = document.getElementById("box-container");

// Get the clear cache button element
const clearButton = document.querySelector("#clear-button");

// Get the existing boxes from local storage
let boxes = JSON.parse(localStorage.getItem("boxes")) || [];

// Define the getRandomColor function outside of renderBoxes
function getRandomColor() {
  const randNum = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
  return `var(--rand-${randNum})`; // Use the rand-N notation to get a random color from CSS variables
}

function renderBoxes() {
  const boxContainer = document.querySelector(".box-container");
  boxContainer.innerHTML = "";

  for (const box of boxes) {
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("box");
    boxDiv.textContent = box.text;
    if (!box.color) {
      box.color = getRandomColor(); // Assign a new random color to boxes without a color property
    }
    boxDiv.style.backgroundColor = box.color; // Use the stored or new color for the box background
    boxContainer.appendChild(boxDiv);
  }
}

// Call the renderBoxes function to render the initial boxes
renderBoxes();

// Add a click event listener to the add button
addButton.addEventListener("click", function () {
  addBox();
});

// Add key press event listeners for the input text element
inputText.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // Enter key
    addBox();
  } else if (event.keyCode === 9 && document.activeElement === inputText) {
    // Tab key and input field has focus
    event.preventDefault(); // Prevent default behavior of moving to next focusable element
  } else {
    // Allow other hotkeys to work
    return;
  }
});

function addBox() {
  // Get the value of the input text
  const inputValue = inputText.value;
  // Generate a new box object with a random color
  const newBox = {
    text: inputValue,
    color: getRandomColor(),
  };
  // Add the new box to the boxes array
  boxes.push(newBox);
  // Save the updated boxes array to local storage
  localStorage.setItem("boxes", JSON.stringify(boxes));
  // Call the renderBoxes function to update the UI with the new box
  renderBoxes();
  // Clear the input text
  inputText.value = "";
}

// Add a click event listener to the clear cache button
clearButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload(); // refresh the page to clear the UI
});
