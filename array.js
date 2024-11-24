let array = [];
let inputFields = [];

function updateArrayDisplay() {
  const arrayDisplay = document.getElementById("arrayDisplay");
  arrayDisplay.innerHTML = ""; 

  const arrayContainer = document.createElement("div");
  arrayContainer.className = "array-container";

  array.forEach((item) => {
    const elementCard = document.createElement("div");
    elementCard.className = "array-element";
    elementCard.textContent = `${item}`; 
    arrayContainer.appendChild(elementCard);
  });

  arrayDisplay.appendChild(arrayContainer);
}


function createInputFields(count) {
  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = ""; 
  inputFields = [];

  for (let i = 0; i < count; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Element ${i + 1}`;
    inputContainer.appendChild(input);
    inputFields.push(input);
  }
}

function createArray() {
  array = inputFields.map(input => input.value.trim());
  updateArrayDisplay();
}

function pushElement() {
  const value = prompt("Enter a value to push:");
  if (value !== null) {
    array.push(value);
    updateArrayDisplay();
  }
}

function popElement() {
  const removed = array.pop();
  alert(removed !== undefined ? `Popped: ${removed}` : "Array is empty!");
  updateArrayDisplay();
}

function shiftElement() {
  const removed = array.shift();
  alert(removed !== undefined ? `Shifted: ${removed}` : "Array is empty!");
  updateArrayDisplay();
}

function unshiftElement() {
  const value = prompt("Enter a value to unshift:");
  if (value !== null) {
    array.unshift(value);
    updateArrayDisplay();
  }
}
function spliceArray() {
  const start = prompt("Enter the start index for splice:");
  const deleteCount = prompt("Enter the number of elements to delete:");
  const elements = prompt("Enter elements to add, separated by commas (or leave empty):");

  if (start !== null && deleteCount !== null) {
    const toAdd = elements ? elements.split(",").map(el => el.trim()) : [];
    const removed = array.splice(parseInt(start), parseInt(deleteCount), ...toAdd);

    alert(`Spliced elements: [${removed.join(", ")}]`);
    updateArrayDisplay();
  }
}

function sliceArray() {
  const start = prompt("Enter the start index for slice:");
  const end = prompt("Enter the end index for slice:");
  if (start !== null && end !== null) {
    const sliced = array.slice(parseInt(start), parseInt(end));

    alert(`Sliced array: [${sliced.join(", ")}]`);
    updateArrayDisplay();
  }
}
function sortArray() {
  array.sort();
  updateArrayDisplay();
}

function reverseArray() {
  array.reverse();
  updateArrayDisplay();
}

function concatArray() {
  const values = prompt("Enter elements to concatenate, separated by commas:");
  if (values) {
    const newArray = array.concat(values.split(",").map(el => el.trim()));
      alert(`Concatenated array: [${newArray.join(", ")}]`);
      array = newArray;
      updateArrayDisplay();
  }
}

function indexOfArray() {
  const value = prompt("Enter a value to find its index:");
  if (value !== null) {
    const index = array.indexOf(value);
    alert(index !== -1 ? `Index of ${value}: ${index}` : `${value} not found in array`);
  }
}

function resetArray() {
  array = [];
  updateArrayDisplay();
}

document.getElementById("arraySlider").addEventListener("input", function () {
  const count = parseInt(this.value);
  document.getElementById("sliderValue").textContent = count;
  createInputFields(count);
});

updateArrayDisplay();

function goBackToHome() {
  window.location.href = "index.html"; 
}