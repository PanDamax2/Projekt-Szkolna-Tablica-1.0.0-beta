import { FilePlus2 } from 'lucide-react'
import { AddNewBtnProps } from '../../types/components/AddNewBtn'

export function AddNewBtn({ children, onClick, disabled }: AddNewBtnProps) {
	return (
		<button
			type='button'
			disabled={disabled}
			onClick={onClick}
			className='flex items-center justify-center gap-4 text-2xl lg:text-3xl mb-5 py-3 w-full max-w-[240px] lg:max-w-[290px] font-medium tracking-wide text-white transition-colors duration-300 transform bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80'>
			<FilePlus2 className='w-[20px]' />
			{children}
		</button>
	)
}
