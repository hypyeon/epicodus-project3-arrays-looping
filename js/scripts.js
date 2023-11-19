//business logic:
function getArray(maxNum) {
    const numArr = [];
    for (let i = 0; i <= maxNum; i++) {
        numArr.push(i);
    }
    return numArr.map((num) => num.toString());
};
function getUserName() {
    const userName = document.getElementById("name").value;
    const trimmedName = userName.trim();
    const removeQuotes = parseInt(trimmedName);
    if (trimmedName && typeof removeQuotes === "string") {
        return userName;
    } else {
        return "friend";
    };
};
function replaceNumToPhrase(maxNum) {
    const numArr = getArray(maxNum);
    const oneTwoThreeArr = ["1", "2", "3"];
    const newArr = [];
    const userName = getUserName();
    numArr.forEach((num) => {
        if (num.includes(oneTwoThreeArr[2])) {
            newArr.push(`Won't you be my neighbor, ${userName}?`);
        } else if (num.includes(oneTwoThreeArr[1])) {
            newArr.push("Boop!");
        } else if (num.includes(oneTwoThreeArr[0])) {
            newArr.push("Beep!");
        } else {
            newArr.push(num);
        }
    });
    return newArr.join(", ");
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