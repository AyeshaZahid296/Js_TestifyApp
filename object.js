
    let obj = {};
    function addInputField() {
      const container = document.querySelector('.key-value-inputs');
      const newPair = document.createElement('div');
      newPair.classList.add('key-value-pair');
      newPair.innerHTML = `<input type="text" class="key-input" placeholder="Enter Key">
                           <input type="text" class="value-input" placeholder="Enter Value">`;
      container.appendChild(newPair);
    }
    function addObject() {
      const key = prompt("Enter property key:");
      const value = prompt(`Enter value for property '${key}':`);
      if (key && value) {
        obj[key] = value;
        document.getElementById("objectOutput").innerText = JSON.stringify(obj, null, 2);
      } else {
        alert("Invalid input!");
      }
    }

    function deleteObject() {
      const key = prompt("Enter the property to delete:");
      if (key in obj) {
        delete obj[key];
        document.getElementById("objectOutput").innerText = JSON.stringify(obj, null, 2);
      } else {
        alert("Property not found!");
      }
    }

    function updateObject() {
      const key = prompt("Enter the property to update:");
      if (key in obj) {
        const newValue = prompt(`Enter new value for ${key}:`);
        obj[key] = newValue;
        document.getElementById("objectOutput").innerText = JSON.stringify(obj, null, 2);
      } else {
        alert("Property not found!");
      }
    }
    function checkProperty() {
      const key = prompt("Enter the property to check:");
      if (key in obj) {
        alert(`Property '${key}' exists with value: ${obj[key]}`);
      } else {
        alert(`Property '${key}' does not exist.`);
      }
    }

    function clearAllProperties() {
      obj = {};
      document.getElementById("objectOutput").innerText = "All properties cleared!";
    }

    function showObject() {
      const keys = document.querySelectorAll('.key-input');
      const values = document.querySelectorAll('.value-input');

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i].value.trim();
        const value = values[i].value.trim();

        if (key && value) {
          obj[key] = value;
        }
      }

      document.getElementById("objectOutput").innerText = JSON.stringify(obj, null, 2);
    }

    function getKeys() {
      const keys = Object.keys(obj);
      document.getElementById("objectOutput").innerText = `Keys: ${JSON.stringify(keys)}`;
    }

    function getValues() {
      const values = Object.values(obj);
      document.getElementById("objectOutput").innerText = `Values: ${JSON.stringify(values)}`;
    }

    function resetObject() {
      obj = {};
      document.getElementById("objectOutput").innerText = "";
      document.querySelector('.key-value-inputs').innerHTML = '<div class="key-value-pair"><input type="text" class="key-input" placeholder="Enter Key"><input type="text" class="value-input" placeholder="Enter Value"></div>';
    }

    function clearObject() {
      obj = {};
      document.getElementById("objectOutput").innerText = "Object cleared!";
    }

    function goBackToHome() {
      window.location.href = "index.html";
    }