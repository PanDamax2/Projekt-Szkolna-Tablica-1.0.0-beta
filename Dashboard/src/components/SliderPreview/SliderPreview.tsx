import 'swiper/css'
import 'swiper/css/pagination'
import './SliderPreview.css'
import { useGetSlider } from '../../queries/sliderQueries'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import AddImage from '../../assets/images/add-image.png'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderData } from '../../types/components/SliderPreview'
import { SERVER_URL } from '../../constants/api'
import { Pagination } from 'swiper/modules'

export function SliderPreview() {
	const { data, isLoading, isError, error } = useGetSlider()

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />
	if (!data || data.length === 0) return <ErrorMessage message={'Brak danych do wyświetlenia.'} />

	return (
		<div className='relative w-full max-w-[390px]'>
			<Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={10} slidesPerView={1} loop={true}>
				{data.map((slide: SliderData, index: number) => (
					<SwiperSlide key={slide.id}>
						<div className='flex items-center justify-center w-full min-h-[110px]  border border-[#d9d9d9]  dark:bg-udark'>
							<img
								src={slide?.file !== 'empty' && `${SERVER_URL}${slide?.file}` || AddImage}
								className='max-h-[170px] object-cover lg:max-h-[210px]'
								alt={`slide-${index}`}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
