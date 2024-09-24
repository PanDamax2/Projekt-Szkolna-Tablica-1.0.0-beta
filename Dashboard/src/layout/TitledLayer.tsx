import { FilePenLine, ScanSearch } from 'lucide-react'
import { TitledLayerProps } from '../types/components/TitledLayer'

export function TitledLayer({ children, editTitle }: TitledLayerProps) {
	return (
		<section className='flex justify-center mt-4 p-6 lg:px-12 lg:mt-10'>

			<div className='p-4 w-full max-w-[1100px] rounded-lg bg-white shadow-lg border border-[#E2E8F0] lg:p-5 lg:pb-7 dark:bg-lightdark dark:border-[#e2e8f031]'>
				
				<div className='flex items-center gap-2 mb-6 text-[#8a99af] select-none'>
					{editTitle ? <FilePenLine className='w-8 lg:w-10' /> : <ScanSearch className='w-8 lg:w-10' />}
					<h3 className='text-[1.3rem] uppercase font-bold lg:text-[1.5rem]'>{editTitle ? 'Edycja' : 'Podgląd'}</h3>
				</div>

				<div className='flex justify-center'>{children}</div>
			</div>
		</section>
	)
}
