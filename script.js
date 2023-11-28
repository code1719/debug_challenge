// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".display");

// This code should be working
// input.addEventListener("input", function displayName() {
//    const name = input.value;
//    display.textContent = name;
// });

// missing function?
function displayName() {
    input.addEventListener("input", function () {
        const name = input.value;
        display.textContent = name;
    })
};

// you should see 5 in the output of your console
function simpleMath(a, b) {
    console.log(simpleMath(2, 3));
};
