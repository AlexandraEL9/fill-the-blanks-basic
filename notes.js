 // Declare variables
var g; // Variable to track if input001 is correct
var h; // Variable to track if input002 is correct
var i; // Variable to track if input003 is correct
var j; // Variable to track if input004 is correct
var k; // Variable to track if input005 is correct

// Function to submit the quiz
function submit001() {
    // Get values from input fields
    var b = input001.value;
    var c = input002.value;
    var d = input003.value;
    var e = input004.value;
    var f = input005.value;

    // Check if input001 is correct
    if (b == "One" || b == "1") {
        g = 1;
        input001.value = b;
        check001.innerHTML = "<text class=button002>" + "✔" + "</text>"; // Display a checkmark
    } else {
        input001.value = b;
        check001.innerHTML = "<text class=button002>" + "✖" + "</text>"; // Display a cross
    }

    // Check if input002 is correct
    if (c == "Two" || c == "2") {
        h = 1;
        input002.value = c;
        check002.innerHTML = "<text class=button002>" + "✔" + "</text>"; // Display a checkmark
    } else {
        input002.value = c;
        check002.innerHTML = "<text class=button002>" + "✖" + "</text>"; // Display a cross
    }

    // Check if input003 is correct
    if (d == "Three" || d == "3") {
        i = 1;
        input003.value = d;
        check003.innerHTML = "<text class=button002>" + "✔" + "</text>"; // Display a checkmark
    } else {
        input003.value = d;
        check003.innerHTML = "<text class=button002>" + "✖" + "</text>"; // Display a cross
    }

    // Check if input004 is correct
    if (e == "Four" || e == "4") {
        j = 1;
        input004.value = e;
        check004.innerHTML = "<text class=button002>" + "✔" + "</text>"; // Display a checkmark
    } else {
        input004.value = e;
        check004.innerHTML = "<text class=button002>" + "✖" + "</text>"; // Display a cross
    }

    // Check if input005 is correct
    if (f == "Five" || f == "5") {
        k = 1;
        input005.value = f;
        check005.innerHTML = "<text class=button002>" + "✔" + "</text>"; // Display a checkmark
    } else {
        input005.value = f;
        check005.innerHTML = "<text class=button002>" + "✖" + "</text>"; // Display a cross
    }

    // Check if all answers are correct
    if (g == 1 && h == 1 && i == 1 && j == 1 && k == 1) {
        // Display success message
        message001.innerHTML = "Congratulations! You have successfully finished this quiz.";
        // Hide the "disappear001" element
        disappear001.innerHTML = "";
        // Show the "repeat" button
        reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repeat</button></div>";
    }
}

// Function to reload the page (reset the quiz)
function repeat001() {
    location.reload(); // Reload the page
}
