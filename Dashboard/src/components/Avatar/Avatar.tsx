import { ChevronDown } from 'lucide-react'
import AvatarIcon from '../../assets/icons/avatar.svg'
import { useAuthCheck } from '../../queries/authQueries'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

export function Avatar({ isMenuOpen, onClick }: { isMenuOpen: boolean; onClick: () => void }) {
	const { data, isError, error, isLoading } = useAuthCheck()

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />
	if (!data || data.length === 0) return <ErrorMessage message={'Brak danych do wyświetlenia.'} />

	const name = data.name && data.lastname ? `${data.name} ${data.lastname}` : 'Undefined'
	const isAdmin = data.isAdmin ? 'Administrator' : 'Użytkownik'

	return (
		<div className='relative'>
			<button onClick={onClick} className='flex items-center gap-2 mr-4 text-[#8A99AF] lg:mr-12 lg:gap-4'>
				<div className='hidden flex-col items-end lg:flex'>
					<span className='text-[1.6rem] leading-8 text-black dark:text-white'>{name}</span>
					<span className='text-lg leading-4'>{isAdmin}</span>
				</div>

				<img src={AvatarIcon} alt='Avatar' className='w-[34px] lg:w-[40px]' />
				<ChevronDown />
			</button>

			{isMenuOpen && <DropdownMenu />}
		</div>
	)
}
