import { SquareArrowLeft } from 'lucide-react'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Avatar } from '../Avatar/Avatar'
import { NavbarProps } from '../../types/components/Navbar'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { useEffect, useState } from 'react'

export function Navbar({ onclick }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

	const handleClickOutside = (event: MouseEvent) => {
		if (isMenuOpen && !(event.target as HTMLElement).closest('.avatar-menu')) {
			setIsMenuOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isMenuOpen])

	return (
		<nav className='flex justify-between items-center sticky top-0 h-[60px] bg-white shadow-[0_1px_6px_0px_rgba(0,0,0,0.17)] z-10 dark:bg-lightdark'>
			<div className='flex items-center gap-5 ml-6'>
				<button onClick={onclick} className='lg:hidden'>
					<SquareArrowLeft />
				</button>
				<Breadcrumbs />
			</div>

			<div className='flex items-center gap-14'>
				<ThemeToggle />
				<Avatar isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
			</div>
		</nav>
	)
}
