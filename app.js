function randomPinGenerator() {
    const randomPin = Math.floor(Math.random() * 10000);
    let randomPinText = randomPin + "";
    if (randomPinText.length === 4 && randomPin != "undefined") {
        return randomPin;

    } else randomPinGenerator();
}

function generatePin() {
    const pin = randomPinGenerator();
    const showPin = document.getElementById("random-pin");
    showPin.value = pin;
    return pin;
}

let keys = 0;
document.getElementById("submit-pin").addEventListener("click", function() {
    const typedPin = document.getElementById("input").value;
    const mainkey = document.getElementById("random-pin").value;
    const incorrect = document.getElementById("incorrect");
    const correct = document.getElementById("correct");
    if (typedPin === mainkey) {
        incorrect.style.display = "none";
        correct.style.display = "block";
    } else {
        incorrect.style.display = "block";
        correct.style.display = "none";
    }
});

function removeLastPin(pin) {
    return parseInt(parseInt(pin) / 10);
}
document.getElementById("key-pad").addEventListener("click", function(event) {
    const key = event.target.innerText;
    const input = document.getElementById("input");
    const keyVal = input.value;
    if (key === "C") {
        input.value = "";
    } else if (key == "<") {
        input.value = removeLastPin(keyVal);
    } else if (!isNaN(key)) {
        const newVal = keyVal + key;
        input.value = newVal;
    } else {
        input.value = "";
    }
});