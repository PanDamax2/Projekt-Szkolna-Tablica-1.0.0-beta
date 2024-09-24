import { Eye, EyeOff, Lock } from 'lucide-react'
import styles from './PasswordInput.module.css'
import { useState } from 'react'
import { PasswordInputProps } from '../../types/components/PasswordInput'

export function PasswordInput({ value, onChange }: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState<boolean>(false)

	function handleShownPassword(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (value.length === 0 && showPassword === false) return
		setShowPassword(!showPassword)
	}

	return (
		<div className='relative'>
			<input
				className={`${styles.input} dark:border-white`}
				type={showPassword ? 'text' : 'password'}
				name='password'
				id='password'
				value={value}
				onChange={e => onChange(e.target.value)}
				autoComplete='off'
				required
			/>

			<label className={styles.label} htmlFor='password'>
				Hasło
			</label>
			<Lock className={styles.icon} />

			<button onClick={handleShownPassword} className={styles.eye} aria-label='Toggle password visibility'>
				{showPassword ? <Eye /> : <EyeOff />}
			</button>
		</div>
	)
}
