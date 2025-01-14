var isStringValid = function (value) {
    if (typeof value === 'string') {
        if (value.length > 0) {
            return '';
        }
        return 'Строка не должна быть пустой';
    }
    return 'Параметр должен быть типа string';
};
var isNumberValid = function (value) {
    if (typeof value === 'number') {
        if (value > 0) {
            return '';
        }
        return 'Число должно быть больше нуля';
    }
    return 'Параметр должен быть типа number';
};
function validateForm(formData, rules) {
    var errors = [];
    for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        var value = formData[rule.type];
        var error = rule.validate(value);
        if (error.length > 0) {
            errors.push("\u041F\u043E\u043B\u0435 ".concat(rule.type, ": ").concat(error));
        }
    }
    return errors;
}
var rules = [
    {
        type: 'username',
        validate: isStringValid,
    },
    {
        type: 'age',
        validate: isNumberValid,
    },
    {
        type: 'email',
        validate: isStringValid,
    },
];
console.log('корретные данные: ', validateForm({ username: 'denis', age: 25, email: 'denis@' }, rules));
console.log('некорректный username: ', validateForm({ username: '', age: 25, email: 'denis@' }, rules));
console.log('некорректный age: ', validateForm({ username: 'denis', age: -25, email: 'denis@' }, rules));
console.log('некорректный email: ', validateForm({ username: 'denis', age: 25, email: '' }, rules));
console.log('некорректное всё: ', validateForm({ username: '', age: -25, email: '' }, rules));
