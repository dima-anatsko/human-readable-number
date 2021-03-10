module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let result = "";
    if (number === 0) {
        return units[0];
    }
    const hundred = Math.trunc(number / 100);
    let tail = number % 100;
    result = hundred > 0 ? units[hundred] + " hundred " : "";
    if (tail < 20 && tail > 0) {
        result += units[tail];
    } else {
        const ten = Math.trunc(tail / 10);
        tail = tail % 10;
        result += ten > 0 ? tens[ten] + " " : "";
        result += tail > 0 ? units[tail] : "";
    }
    return result.trim();
};
