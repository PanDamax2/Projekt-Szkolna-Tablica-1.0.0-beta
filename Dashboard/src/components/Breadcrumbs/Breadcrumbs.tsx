import { ChevronRight, House } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { NAME_CONVERSION } from '../../constants/categories.ts'

export function Breadcrumbs() {
	const { pathname } = useLocation()

	return (
		<div className='flex items-center ml-6 text-[#8A99AF]'>
			<House className='hidden h-8 lg:block' />
			<ChevronRight className='hidden h-8 mx-2 lg:block' />
			<h2 className='mb-1 capitalize leading-2 text-black dark:text-white'>
				{NAME_CONVERSION[pathname.split('/').pop() || ''] || 'Brak'}
			</h2>
		</div>
	)
}
