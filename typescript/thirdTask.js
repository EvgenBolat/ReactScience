function processValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return Math.pow(value, 2);
    }
    else if (typeof value === 'boolean') {
        return !value;
    }
    else{
        return null
    }
}
console.log(processValue('hello'));
console.log(processValue(5));
console.log(processValue(false));
