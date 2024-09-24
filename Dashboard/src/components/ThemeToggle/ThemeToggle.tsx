import { Moon, Sun } from 'lucide-react'
import { useColorModeContext } from '../../context/useDarkMode'

export function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorModeContext()

	return (
		<label
			className={`relative m-0 block h-11 w-[52px] rounded-full ${colorMode === 'dark' ? 'bg-[#3C50E0]' : 'bg-[#E2E8F0]'}`}>
			<input
				name='theme-toggle'
				autoComplete='off'
				type='checkbox'
				onChange={toggleColorMode}
				className='absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0'
			/>
			<span
				className={`absolute top-1/2 left-[3px] flex h-9 w-9 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
					colorMode === 'dark' && '!right-[3px] !translate-x-full'
				}`}>

				<Sun className='dark:hidden w-7' />
				<Moon className='hidden text-udark dark:inline-block w-7' />
			</span>
		</label>
	)
}
