
// Get the calculator display
let display = document.getElementById("display");

// Add numbers and operators
function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        let expression = display.value;

        // Check whether input contains valid characters
        if (
            expression === "" ||
            !/^[0-9+\-*/.() ]+$/.test(expression)
        ) {
            throw new Error("Invalid input");
        }

        // Perform calculation
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        // Check invalid results
        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        // Show result
        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}
