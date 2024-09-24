import { useState } from 'react'
import { useAddSlider, useDeleteSlider, useGetSlider, useUpdateSlider } from '../../queries/sliderQueries'
import { SliderData } from '../../types/components/SliderPreview'
import { AddNewBtn } from '../AddNewBtn/AddNewBtn'
import { DeleteBtn } from '../DeleteBtn/DeleteBtn'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { FileInput } from '../FileInput/FileInput'
import { Label } from '../Label/Label'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { UpdateBtn } from '../UpdateBtn/UpdateBtn'

export function SliderForm() {
	const { data, isLoading, isError, error } = useGetSlider()
	const addSlider = useAddSlider()
	const updateSlider = useUpdateSlider()
	const deleteSlider = useDeleteSlider()
	const [formData, setFormData] = useState<{ [key: number]: Partial<{ file?: File }> }>({})

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />
	if (!data || data.length === 0) return <ErrorMessage message={'Brak danych do edytowania.'} />

	const handleInputChange = (id: number, file: File | undefined) => {
		setFormData(prev => ({
			...prev,
			[id]: {
				...prev[id],
				file: file,
			},
		}))
	}

	const handleAddSlider = () => addSlider.mutate('empty')

	const handleUpdateSlider = (id: number) => {
		const updatedData = formData[id]
		if (updatedData && updatedData.file) {
			updateSlider.mutate({ id: String(id), file: updatedData.file })
		}
	}

	const handleDeleteSlider = (id: number) => deleteSlider.mutate(String(id))

	return (
		<form encType='multipart/form-data' className='w-full max-w-[600px] px-2'>
			<AddNewBtn disabled={addSlider.status === 'pending'} onClick={handleAddSlider}>
				{addSlider.status === 'pending' ? <LoadingSpinner /> : 'Dodaj kolejne zdjęcie'}
			</AddNewBtn>

			{data.map((input: SliderData, index: number) => (
				<Label name={`Zjęcie nr ${index + 1}`} htmlFor={`slider${input.id}`} key={input.id}>
					<FileInput
						id={`slider${input.id}`}
						name={`slider${input.id}`}
						onChange={file => handleInputChange(input.id, file ? file : undefined)}
						accept='.png, .jpg, .jpeg, .webp'
					/>

					<UpdateBtn onClick={() => handleUpdateSlider(input.id)} disabled={updateSlider.status === 'pending'}>
						{updateSlider.status === 'pending' ? <LoadingSpinner /> : 'Zapisz'}
					</UpdateBtn>
					<DeleteBtn onClick={() => handleDeleteSlider(input.id)} disabled={deleteSlider.status === 'pending'}>
						{deleteSlider.status === 'pending' ? <LoadingSpinner /> : 'Usuń'}
					</DeleteBtn>
				</Label>
			))}
		</form>
	)
}
