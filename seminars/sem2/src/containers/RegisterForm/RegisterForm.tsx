import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styles from './RegisterForm.module.css'

interface validationObject {
	value: string
	validation: (value: string) => boolean
}

const RegisterForm: FC = () => {
	const usernameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

  const [wrongSubmitVisible, setWrongSubmitVisible] = useState(false)

	const [usernameTouched, setUsernameTouched] = useState(false)
	const [emailTouched, setEmailTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const userNameValidation = useCallback((name: string): boolean => {
		return name.length > 2
	}, [])

	const emailValidation = useCallback((email: string): boolean => {
		const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
		return !!email.match(regex)
	}, [])

	const passwordValidation = useCallback((password: string): boolean => {
		return password.length > 5
	}, [])

	const [check, setCheck] = useState({
		usernameCheck: false,
		emailCheck: false,
		passwordCheck: false,
	})

	useEffect(() => {
		const check = formValidate(
			{ value: username, validation: userNameValidation },
			{ value: email, validation: emailValidation },
			{ value: password, validation: passwordValidation }
		)
		setCheck(check)
	}, [username, email, password])

  const value = useFormValidate(
    { value: username, validation: userNameValidation },
    { value: email, validation: emailValidation },
    { value: password, validation: passwordValidation }
  )

  const validateForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.usernameCheck && value.emailCheck && value.passwordCheck) {
      setWrongSubmitVisible(false)
    }
    else {
      setWrongSubmitVisible(true)
    }
  },[check])

	return (
		<form action='' className={styles['register-form']} onSubmit={validateForm}>
			<label className={styles['register-form__input']}>
				<span>Username</span>
				<input
					type='text'
					placeholder='Enter your username'
					ref={usernameRef}
					onChange={e => setUsername(e.target.value)}
					onBlur={e => {
						setUsername(e.target.value)
						setUsernameTouched(true)
					}}
				/>
				<p hidden={!usernameTouched || check.usernameCheck}>
					Username should be more than 2 characters
				</p>
			</label>
			<label className={styles['register-form__input']}>
				<span>Email</span>
				<input
					type='email'
					placeholder='Enter your email'
					ref={emailRef}
					onChange={e => setEmail(e.target.value)}
					onBlur={e => {
						setEmail(e.target.value)
						setEmailTouched(true)
					}}
				/>
				<p hidden={!emailTouched || check.emailCheck}>Email should be valid</p>
			</label>
			<label className={styles['register-form__input']}>
				<span>Password</span>
				<input
					type='password'
					placeholder='Enter your password'
					ref={passwordRef}
					onChange={e => setPassword(e.target.value)}
					onBlur={e => {
						setPassword(e.target.value)
						setPasswordTouched(true)
					}}
				/>
				<p hidden={!passwordTouched || check.passwordCheck}>
					Password should be more than 5 characters
				</p>
			</label>
			<button
				type='submit'
				className={styles['register-form__button']}
			>
				Регистрация
			</button>
      <p>{wrongSubmitVisible ? 'Wrong submit' : ''}</p>
		</form>
	)
}

function useFormValidate(nameObj: validationObject,
	emailObj: validationObject,
	password: validationObject) {
    return React.useMemo(() => {
        return formValidate(nameObj, emailObj, password)
    },[nameObj, emailObj, password])
  }

function formValidate(
	nameObj: validationObject,
	emailObj: validationObject,
	password: validationObject
) {
	return {
		usernameCheck: nameObj.validation(nameObj.value),
		emailCheck: emailObj.validation(emailObj.value),
		passwordCheck: password.validation(password.value),
	}
}

export default RegisterForm
