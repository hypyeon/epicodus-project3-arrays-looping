//business logic:
function getArray(v) {
    const numArr = [];
    if (Number.isInteger(v) && v >= 0) {
        for (let i = 0; i <= v; i++) {
            numArr.push(i);
        }
        return numArr;
    } else {
        return `Please provide a positive integer.`;
    }
};
function replaceNumToPhrase(v) {
    const numArr = getArray(v);
    const arrLen = numArr.length;
    const one = "1";
    const two = "2";
    const three = "3";
    for (let i = 0; i <= arrLen; i++) {
        const currentNum = numArr[i].toString();
        if (currentNum.includes(one)) {
            numArr[i] = "Beep!";
        } else if (currentNum.includes(two)) {
            numArr[i] = "Boop!";
        } else if (currentNum.includes(three)) {
            numArr[i] = "Won't you be my neighbor?";
        } else {
            return;
        }
    }
    return numArr;
}

//UI logic: 
function formHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");
    const numValue = document.getElementById("number").value;
    const num = parseInt(numValue);
    const array = replaceNumToPhrase(num);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        result.classList.remove("hidden");
        result.innerText = array;
    });
    form.addEventListener("reset", () => {
        result.classList.add("hidden");
    });
};
window.onload = () => {
    formHandler();
}