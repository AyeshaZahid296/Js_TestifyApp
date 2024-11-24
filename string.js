
    // Function to reverse the string
    function reverseString() {
      const input = document.getElementById("stringInput").value;
      const reversed = input.split("").reverse().join("");
      document.getElementById("stringOutput").innerText = `Reversed: ${reversed}`;
    }

    // Function to convert the string to uppercase
    function toUpperCase() {
      const input = document.getElementById("stringInput").value;
      document.getElementById("stringOutput").innerText = `Uppercase: ${input.toUpperCase()}`;
    }

    // Function to convert the string to lowercase
    function toLowerCase() {
      const input = document.getElementById("stringInput").value;
      document.getElementById("stringOutput").innerText = `Lowercase: ${input.toLowerCase()}`;
    }

    // Function to find the length of the string
    function findLength() {
      const input = document.getElementById("stringInput").value;
      document.getElementById("stringOutput").innerText = `Length: ${input.length}`;
    }

    // Function to replace spaces with underscores
    function replaceSpaces() {
      const input = document.getElementById("stringInput").value;
      const replaced = input.replace(/\s+/g, "_");
      document.getElementById("stringOutput").innerText = `Replaced Spaces: ${replaced}`;
    }

    // Function to remove punctuation from the string
    function removePunctuation() {
      const input = document.getElementById("stringInput").value;
      const noPunctuation = input.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      document.getElementById("stringOutput").innerText = `Without Punctuation: ${noPunctuation}`;
    }

    // Function to trim spaces from both ends of the string
    function trimString() {
      const input = document.getElementById("stringInput").value;
      const trimmed = input.trim();
      document.getElementById("stringOutput").innerText = `Trimmed: ${trimmed}`;
    }

    // Function to check if the string includes a specific substring
    function checkIncludes() {
      const input = document.getElementById("stringInput").value;
      const searchTerm = prompt("Enter the substring to check:");
      const includes = input.includes(searchTerm);
      document.getElementById("stringOutput").innerText = `Includes "${searchTerm}": ${includes}`;
    }

    // Function to convert the string to title case
    function toTitleCase() {
      const input = document.getElementById("stringInput").value;
      const titleCased = input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      document.getElementById("stringOutput").innerText = `Title Case: ${titleCased}`;
    }

    // Function to replace a substring with another string
    function replaceSubstring() {
      const input = document.getElementById("stringInput").value;
      const searchTerm = prompt("Enter the substring to replace:");
      const replaceWith = prompt("Enter the replacement string:");
      const replaced = input.replace(new RegExp(searchTerm, 'g'), replaceWith);
      document.getElementById("stringOutput").innerText = `Replaced Substring: ${replaced}`;
    }

    // Function to clear output when the user starts typing
    function clearOutput() {
      document.getElementById("stringOutput").innerText = "";
    }

    // Function to go back to the home page
    function goHome() {
      window.location.href = "index.html";
    }

    // Function to go back to the previous page (Home)
    function goBackToHome() {
      window.location.href = "index.html";
    }