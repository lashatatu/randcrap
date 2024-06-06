function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(10, 15, "as-number");
console.log(combinedAges);
var combinedString = combine("lasha ", "tatu", "as-text");
console.log(combinedString);
