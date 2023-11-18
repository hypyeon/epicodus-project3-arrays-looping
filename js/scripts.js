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