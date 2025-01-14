interface my_FormData {
	username: string
	email: string
	age: number
}

const isStringValid = (value: string | number) => {
	if (typeof value === 'string') {
		if (value.length > 0) {
			return ''
		}
		return 'Строка не должна быть пустой'
	}
	return 'Параметр должен быть типа string'
}

const isNumberValid = (value: string | number) => {
	if (typeof value === 'number') {
		if (value > 0) {
			return ''
		}
		return 'Число должно быть больше нуля'
	}
	return 'Параметр должен быть типа number'
}

type validateRule = {
	type: keyof my_FormData
	validate: (value: string | number) => string
}

function validateForm(formData: my_FormData, rules: validateRule[]) {
	let errors: string[] = []
	for (let i = 0; i < rules.length; i++) {
		const rule = rules[i]
		const value = formData[rule.type]
		const error = rule.validate(value)
		if (error.length > 0) {
			errors.push(`Поле ${rule.type}: ${error}`)
		}
	}
	return errors
}

const rules: validateRule[] = [
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
]

console.log(
	'корретные данные: ',
	validateForm({ username: 'denis', age: 25, email: 'denis@' }, rules)
)

console.log(
	'некорректный username: ',
	validateForm({ username: '', age: 25, email: 'denis@' }, rules)
)

console.log(
	'некорректный age: ',
	validateForm({ username: 'denis', age: -25, email: 'denis@' }, rules)
)

console.log(
	'некорректный email: ',
	validateForm({ username: 'denis', age: 25, email: '' }, rules)
)

console.log(
	'некорректное всё: ',
	validateForm({ username: '', age: -25, email: '' }, rules)
)
