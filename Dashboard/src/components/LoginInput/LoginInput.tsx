import { useEffect, useRef } from 'react'
import styles from './LoginInput.module.css'
import { User } from 'lucide-react'
import { LoginInputProps } from '../../types/components/LoginInput'

export function LoginInput({ value, onChange }: LoginInputProps) {
	const userRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (userRef.current) {
			userRef.current.focus()
		}
	}, [])

	return (
		<div className='relative'>
			<input
				className={`${styles.input} dark:border-white`}
				ref={userRef}
				type='text'
				name='login'
				id='login'
				value={value}
				autoComplete='username'
				onChange={e => onChange(e.target.value)}
				required
			/>
			<label className={styles.label} htmlFor='login'>
				Login
			</label>
			<User className={styles.icon} />
		</div>
	)
}
