import { FileInputProps } from '../../types/components/FileInput'

export function FileInput({ id, name, onChange, ...props }: FileInputProps) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			onChange(e.target.files[0])
		} else {
			onChange(null)
		}
	}

	return (
		<input
			id={id}
			name={name}
			type='file'
			onChange={handleChange}
			multiple={false}
			className='w-full cursor-pointer rounded-lg text-2xl lg:text-3xl border-[1.5px] border-lightgray border-stroke outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-lightgray file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-purpleborder file:hover:bg-opacity-10 focus:border-purpleborder active:border-purpleborder disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-darkinput dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary'
			{...props}
		/>
	)
}
