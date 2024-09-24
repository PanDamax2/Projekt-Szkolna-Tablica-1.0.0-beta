import { LabelProps } from '../../types/components/Label'

export function Label({ children, name, htmlFor }: LabelProps) {
	return (
		<div className='mb-8'>
			<label className='block mb-2 ml-1 text-[1.9rem] font-satoshi font-medium dark:text-gray-200' htmlFor={htmlFor}>
				{name}
			</label>

			{children}
		</div>
	)
}
