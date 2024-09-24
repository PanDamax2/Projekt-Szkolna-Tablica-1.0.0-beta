import { TheadProps } from '../../types/components/Thead'

export function Thead({ children }: TheadProps) {
	return (
		<thead className=' border border-[#d9d9d9] dark:border-slate-500'>
			<tr className='bg-gray text-2xl lg:text-3xl dark:bg-udark'>{children}</tr>
		</thead>
	)
}
