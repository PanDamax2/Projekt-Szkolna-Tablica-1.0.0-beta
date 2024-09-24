import { useState } from 'react'
import {
	useAddReplacement,
	useDeleteReplacement,
	useGetReplacements,
	useUpdateReplacement,
} from '../../queries/replacementQueries'
import { Replacement } from '../../types/components/ReplacementsPreview'
import { AddNewBtn } from '../AddNewBtn/AddNewBtn'
import { DeleteBtn } from '../DeleteBtn/DeleteBtn'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { Input } from '../Input/Input'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { UpdateBtn } from '../UpdateBtn/UpdateBtn'
import { emptyReplacement, inputFieldsReplacement } from './helper'
import toast from 'react-hot-toast'

export function ReplacementsForm() {
	const { data, isLoading, isError, error } = useGetReplacements()
	const addReplacement = useAddReplacement()
	const deleteReplacement = useDeleteReplacement()
	const updateReplacement = useUpdateReplacement()
	const [formData, setFormData] = useState<{ [key: number]: Partial<Replacement> }>({})

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />
	if (!data || data.length === 0) return <ErrorMessage message={'Brak danych do edytowania.'} />

	const handleInputChange = (id: number, name: string, value: string) => {
		if (value.length > 32) {
			toast.error('Pole nie może przekraczać 32 znaków.')
			return
		}

		setFormData(prev => ({
			...prev,
			[id]: {
				...prev[id],
				[name]: value,
			},
		}))
	}

	const handleAddReplacement = () => addReplacement.mutate(emptyReplacement)

	const handleUpdateReplacement = (id: number) => {
		const updatedData = formData[id]
		if (updatedData) {
			updateReplacement.mutate({ id, ...updatedData })
		}
	}

	const handleDeleteReplacement = (id: number) => deleteReplacement.mutate(id)

	return (
		<form className='w-full max-w-[839px] px-2'>
			<AddNewBtn disabled={addReplacement.status === 'pending'} onClick={handleAddReplacement}>
				{addReplacement.status === 'pending' ? <LoadingSpinner /> : 'Dodaj kolejne zastęsptwo'}
			</AddNewBtn>

			{data.map((input: Replacement, index: number) => (
				<div key={input.id} className='mb-1'>
					<label
						htmlFor={`lesson${input.id}`}
						className='block mb-1 ml-1 text-[1.9rem] font-satoshi font-medium dark:text-gray-200'>
						Wiersz {index + 1}
					</label>

					<div className='flex flex-wrap'>
						{inputFieldsReplacement.map(el => (
							<Input
								id={`${el.name}${input.id}`}
								key={`${el.name}${input.id}`}
								name={el.name}
								type='text'
								defaultValue={input[el.name as keyof Replacement]}
								className={`${el.widthClass}`}
								onChange={e => handleInputChange(input.id, el.name, e.target.value)}
							/>
						))}
					</div>

					<UpdateBtn onClick={() => handleUpdateReplacement(input.id)} disabled={updateReplacement.status === 'pending'}>
						{updateReplacement.status === 'pending' ? <LoadingSpinner /> : 'Zapisz'}
					</UpdateBtn>
					<DeleteBtn onClick={() => handleDeleteReplacement(input.id)} disabled={deleteReplacement.status === 'pending'}>
						{deleteReplacement.status === 'pending' ? <LoadingSpinner /> : 'Usuń'}
					</DeleteBtn>
				</div>
			))}
		</form>
	)
}
