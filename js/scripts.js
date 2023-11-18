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

function formHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        result.classList.remove("hidden");
    });
    form.addEventListener("reset", () => {
        result.classList.add("hidden");
    });
};
window.onload = () => {
    formHandler();
}