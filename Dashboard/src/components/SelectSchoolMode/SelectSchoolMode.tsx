import { ChevronDown } from 'lucide-react'
import { viewModes } from '../../constants/categories'
import { SelectSchoolModeProps } from '../../types/components/SelectSchoolMode'

export function SelectSchoolMode({ value, onChange }: SelectSchoolModeProps) {

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, onChange: (value: string) => void) => {
		e.preventDefault()
		onChange(e.target.value)
	}

	return (
		<div className='relative dark:bg-darkinput'>
			<select
				id='viewMode'
				value={value}
				onChange={(e) => handleSelectChange(e, onChange)}
				className='relative w-full text-2xl lg:text-3xl appearance-none rounded-lg border border-lightgray border-stroke bg-transparent py-4 px-5 cursor-pointer outline-none focus:border-purpleborder transition dark:bg-darkinput'>
					
				<option value='' disabled className='text-2xl lg:text-3xl'>
					Wybierz tryb panelu
				</option>

				{viewModes.map(mode => (
					<option key={mode.value} value={mode.value} className='text-2xl lg:text-3xl'>
						{mode.label}
					</option>
				))}
			</select>

			<ChevronDown className='absolute top-1/2 right-4 -translate-y-1/2' />
		</div>
	)
}
