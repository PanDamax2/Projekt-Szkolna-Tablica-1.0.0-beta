import { LogOut, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../queries/authQueries'

export function DropdownMenu() {
	const logoutMutation = useLogout()

	const handleLogout =  () => {
		logoutMutation.mutate()
	}

	return (
		<div className='avatar-menu absolute right-[10px] lg:right-[38px] top-[50px] bg-white divide-y divide-[lightgray] font-satoshi font-medium border border-[#E2E8F0] rounded-sm shadow w-[150px] lg:w-full max-w-[220px] dark:bg-lightdark dark:border-[#e2e8f031]'>
			<ul className='py-2 pt-4 px-4 text-2xl lg:text-3xl text-gray-700 dark:text-gray-200'>
				<li>
					<Link
						to={'/user/my-profile'}
						className='flex items-center gap-4 lg:px-4 py-2 hover:text-purpleborder dark:hover:bg-gray-600 dark:hover:text-lightgray'>
						<User />
						Mój profil
					</Link>
				</li>
			</ul>
			<div className='py-2 pb-4 px-4'>
				<button onClick={handleLogout}
					className='flex items-center gap-4 lg:px-4 py-2 text-2xl lg:text-3xl hover:text-purpleborder dark:hover:text-lightgray'>
					<LogOut className='w-9' />
					Wyloguj się
				</button>
			</div>
		</div>
	)
}
