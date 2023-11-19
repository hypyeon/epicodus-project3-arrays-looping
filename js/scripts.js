//business logic:
function getArray(maxNum) {
    const numArr = [];
    for (let i = 0; i <= maxNum; i++) {
        numArr.push(i);
    }
    return numArr.map((num) => num.toString());
};
function replaceNumToPhrase(maxNum) {
    const numArr = getArray(maxNum);
    let joinedArr = numArr.join(", ");

    joinedArr = joinedArr.replace(/1/g, "Beep!");
    return joinedArr;

    /*
    for (let i = 0; i <= arrLen; i++) {
        if (numArr[i].includes(oneTwoThreeArr[0])) {
            newArr.push("Beep!");
        } else if (numArr[i].includes(oneTwoThreeArr[1])) {
            newArr.push("Boop!");
        } else if (numArr[i].includes(oneTwoThreeArr[2])) {
            newArr.push("Won't you be my neighbor?");
        } else {
            newArr.push(parseInt(numArr[i]));
        };
    };
    return newArr;
    */
};

//UI logic: 
function formHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const numValue = document.getElementById("number").value;
        const num = parseInt(numValue);
        const array = replaceNumToPhrase(num);
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