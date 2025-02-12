import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
	firstName: string
	age: number
	email: string
	gender: 'male' | 'female' | 'other' | ''
}
const BasicPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<Inputs>({
		defaultValues: {
			firstName: '',
			age: 1,
			email: '',
			gender: '',
		},
	})

	const onSubmit: SubmitHandler<Inputs> = data => setFormOutput(data)

	const [formOutput, setFormOutput] = useState<Inputs | null>(null)

	const inputStyles = {
		border: '1px solid black',
		padding: '5px',
		margin: '5px',
		borderRadius: '5px',
		width: '300px',
	}

	const errorStyles = {
		color: 'red',
		fontSize: '12px',
		width: '100%',
	}

	const h2Styles = {
		fontSize: '18px',
		fontWeight: 'bold',
	}
	return (
		<div
			style={{
				padding: '50px',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<h1
				style={{
					fontSize: '24px',
					fontWeight: 'bold',
				}}
			>
				Пример построения самой обычной формы
			</h1>

			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Controller
					name='firstName'
					control={control}
					rules={{
						required: {
							value: true,
							message: 'Обязательное поле',
						},
						minLength: {
							value: 3,
							message: 'Минимальная длина 3 символа',
						},
					}}
					render={({ field }) => (
						<label>
							<p>Имя</p>
							<input placeholder='Имя' style={inputStyles} {...field} />
						</label>
					)}
				/>

				{errors.firstName && (
					<p style={errorStyles}>{errors.firstName.message}</p>
				)}

				<Controller
					name='age'
					control={control}
					rules={{
						required: {
							value: true,
							message: 'Обязательное поле',
						},
						min: {
							value: 0,
							message: 'Минимальный возраст 0',
						},
						validate: {
							validateAge: (value: number) => {
								if (value != 22) {
									return 'Возраст должен быть 22'
								}
								return true
							},
						},
					}}
					render={({ field }) => (
						<label>
							<p>Возраст</p>
							<input
								style={inputStyles}
								placeholder='Возраст'
								type='number'
								min={0}
								{...field}
							/>
						</label>
					)}
				/>
				{errors.age && <p style={errorStyles}>{errors.age.message}</p>}
				<Controller
					name='email'
					control={control}
					rules={{
						required: {
							value: true,
							message: 'Обязательное поле',
						},
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Некорректный email',
						},
					}}
					render={({ field }) => (
						<label>
							<p>Email</p>
							<input
								style={inputStyles}
								placeholder='Email'
								type='email'
								{...field}
							/>
						</label>
					)}
				/>
				{errors.email && <p style={errorStyles}>{errors.email.message}</p>}

				<Controller
					name='gender'
					control={control}
					rules={{
						required: {
							value: true,
							message: 'Обязательное поле',
						},
					}}
					render={({ field }) => (
						<label
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<p>Пол</p>
							<select {...field}>
								<option value='' disabled>
									Выберите пол
								</option>
								<option value='male'>Мужчина</option>
								<option value='female'>Женщина</option>
								<option value='other'>Другое</option>
							</select>
						</label>
					)}
				/>
				{errors.gender && <p style={errorStyles}>{errors.gender.message}</p>}

				<button
					type='submit'
					style={{
						border: '1px solid black',
						padding: '5px',
						width: '200px',
						marginTop: '20px',
					}}
				>
					Отправить
				</button>
			</form>
			<h2 style={h2Styles}>Отслеживаемое поле</h2>
			{<p>Имя: {watch('firstName')}</p>}

			<h2 style={h2Styles}>То, что отправится на сервер:</h2>
			{!formOutput && <p>Ничего не отправлено</p>}
			{formOutput && <pre>{JSON.stringify(formOutput, null, 2)}</pre>}
		</div>
	)
}

export default BasicPage
