import { FullWidthButton } from '../components/FullWidthButton/FullWidthButton'
import { LoginInput } from '../components/LoginInput/LoginInput'
import { Logo } from '../components/Logo/Logo'
import { PasswordInput } from '../components/PasswordInput/PasswordInput'
import { SeparatorWithText } from '../components/SeparatorWithText/SeparatorWithText'
import { CenterContainer } from '../layout/CenterContainer'
import { ForgotPasswordLink } from '../components/ForgotPasswordLink/ForgotPasswordLink'
import { useState } from 'react'
import { VideoLogin } from '../components/VideoLogin/VideoLogin'
import { useLogin } from '../queries/authQueries'

export default function LoginPage() {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const loginMutation = useLogin()

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		loginMutation.mutate({ login, password })
	}

	return (
		<CenterContainer>
			<div className='flex w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-[800px] dark:bg-lightdark'>
				<VideoLogin />

				<form onSubmit={handleLogin} className='w-full px-10 py-8 pt-14 md:px-8 lg:w-1/2 lg:py-28 lg:px-16'>
					<Logo />
					<p className='mb-14 text-3xl text-center text-gray-600'>Witamy z powrotem!</p>

					<LoginInput value={login} onChange={setLogin} />
					<PasswordInput value={password} onChange={setPassword} />

					<FullWidthButton text='Zaloguj się' />

					<SeparatorWithText />
					<ForgotPasswordLink />
				</form>
			</div>
		</CenterContainer>
	)
}
