import AddImage from '../../assets/images/add-image.png'
import ViewSchool from '../../assets/images/school.webp'
import { SERVER_URL } from '../../constants/api'
import { useGetViews } from '../../queries/viewsQueries'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

export function ViewsPreview() {
	const { data, isLoading, isError, error } = useGetViews()

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />

	const imageUrl = data?.schoolLogo ? `${SERVER_URL}${data?.schoolLogo}` : AddImage

	return (
		<div className='flex flex-col items-center justify-center gap-4 w-full lg:flex-row lg:justify-evenly'>
			<div className='flex items-center justify-center w-full min-h-[110px] max-h-[140px] border border-[#d9d9d9] max-w-[340px] dark:bg-udark'>
				<img src={imageUrl} className={imageUrl ? ' max-h-[140px]' : 'w-32'} alt='School logo' />
			</div>

			<img src={ViewSchool} className='w-full max-w-[320px] max-h-[140px]' alt='Views mode' />
		</div>
	)
}
