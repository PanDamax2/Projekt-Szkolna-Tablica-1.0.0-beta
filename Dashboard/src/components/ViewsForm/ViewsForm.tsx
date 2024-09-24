import { Label } from '../Label/Label'
import { FileInput } from '../FileInput/FileInput'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { useState } from 'react'
import { SelectSchoolMode } from '../SelectSchoolMode/SelectSchoolMode'
import { useGetViews, useUpdateViews } from '../../queries/viewsQueries'
import toast from 'react-hot-toast'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

export function ViewsForm() {
	const { data, isLoading, isError, error } = useGetViews()
	const updateViewsMutation = useUpdateViews()

	const [viewMode, setViewMode] = useState(data?.viewMode)
	const [file, setFile] = useState<File | null>(null)

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (viewMode || file) {
			const formData = new FormData()

			if (viewMode) formData.append('viewMode', viewMode)
			if (file) formData.append('file', file)

			updateViewsMutation.mutate(formData)
			setFile(null)
			setViewMode('')
		} else {
			toast.error('Wybierz tryb widoku lub zmień logo.')
		}
	}

	return (
		<form onSubmit={handleSubmit} encType='multipart/form-data' className='w-full max-w-[600px] px-2'>
			<Label name='Logo szkoły' htmlFor='logo'>
				<FileInput id='logo' name='logo' onChange={setFile} accept='.png, .jpg, .jpeg, .webp' />
			</Label>

			<Label name='Widok' htmlFor='viewMode'>
				<SelectSchoolMode value={viewMode || data?.viewMode} onChange={setViewMode} />
			</Label>

			<FullWidthButton
				text={updateViewsMutation.status === 'pending' ? 'Zapisywanie...' : 'Zapisz'}
				disabled={updateViewsMutation.status === 'pending'}
			/>
		</form>
	)
}
