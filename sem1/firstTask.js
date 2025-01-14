var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
//Денис, 25 лет, любит: чтение, спорт. Пол: Мужской
function getPersonInfo(name, age, hobbies, gender) {
    return "".concat(name, ", ").concat(age, " \u043B\u0435\u0442, \u043B\u044E\u0431\u0438\u0442: ").concat(hobbies.join(', '), ". \u041F\u043E\u043B: ").concat(gender === Gender.MALE ? 'Мужской' : 'Женский');
}
console.log(getPersonInfo('Денис', 25, ['чтение', 'спорт'], Gender.MALE));
