module.exports = function reverse (n) {
    let string = String(n);
    let i = 0;
    result = '';
    if (string[0] === '-') {
      string = string.substring(1);
    } else {
      string = String(n);
    }
    while (i < string.length) {
      result = `${string[i]}${result}`;
      i += 1;
    }
    return Number(result);
}

