import { FullWidthButtonProps } from '../../types/components/FullWidthButton'

export function FullWidthButton({ text, onClick, disabled }: FullWidthButtonProps) {
	return (
		<button
			type='submit'
			onClick={onClick}
			disabled={disabled}
			className='w-full text-3xl lg:text-4xl px-6 py-3 lg:py-4 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
			{text}
		</button>
	)
}
