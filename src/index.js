module.exports = function reverse (n) {
    if (n < 0) {
        let array = (n*(-1)).toString().split("").reverse().join("");
        let reverseIntg = 1*array;
        return(reverseIntg);
    } else {
        let array = n.toString().split("").reverse().join("");
        let reverseIntg = 1*array;
        return(reverseIntg);
    }
}
