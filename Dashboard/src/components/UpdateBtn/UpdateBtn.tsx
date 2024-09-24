import { UpdateBtnProps } from '../../types/components/UpdateBtn'

export function UpdateBtn({ disabled, children, onClick }: UpdateBtnProps) {
	return (
		<button
			type='button'
			disabled={disabled}
			onClick={onClick}
			className='text-2xl lg:text-3xl w-40 mt-1 mr-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
			{children}
		</button>
	)
}
