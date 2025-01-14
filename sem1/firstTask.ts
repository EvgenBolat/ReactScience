enum Gender {
	MALE = 0,
	FEMALE = 1,
}

//Денис, 25 лет, любит: чтение, спорт. Пол: Мужской
function getPersonInfo(
	name: string,
	age: number,
	hobbies: string[],
	gender: Gender
) {
	
	return `${name}, ${age} лет, любит: ${hobbies.join(', ')}. Пол: ${
		gender === Gender.MALE ? 'Мужской' : 'Женский'
	}`
}

console.log(getPersonInfo('Денис', 25, ['чтение', 'спорт'], Gender.MALE))
