import { InputProps } from '../../types/components/Input'

export function Input({ id, name, type, className, ...props }: InputProps) {
	return (
		<input
			id={id}
			name={name}
			type={type}
			className={`font-satoshi block text-2xl lg:text-3xl w-full px-2 py-2 lg:px-3 lg:py-3 text-gray-700 bg-white border border-lightgray rounded-lg focus:border-purpleborder  dark:text-white dark:bg-darkinput focus:outline-none ${className}`}
			{...props}
			/>
	)
}
