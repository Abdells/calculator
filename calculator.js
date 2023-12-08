function add() {
    var num1 = parseFloat(document.getElementById("num1").value); // Get first number from input
    var num2 = parseFloat(document.getElementById("num2").value); // Get second number from input
    var result = num1 + num2; // Add the numbers
    document.getElementById("result").innerText = result; // Display the result
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2; // Subtract the numbers
    document.getElementById("result").innerText = result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2; // Multiply the numbers
    document.getElementById("result").innerText = result;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
        var result = num1 / num2; // Divide the numbers
        document.getElementById("result").innerText = result;
    }
}
