import { LucideIcon } from 'lucide-react'

type SidebarLinkProps = {
	item: {
		title: string
		icon: LucideIcon
	}
	active: boolean
	index: number
	categoryIndex: number
}

export function SidebarLink({ item, active, index, categoryIndex }: SidebarLinkProps) {
	const IconComponent = item.icon

	return (
		<div
			className={`relative mb-2 rounded-2xl rounded-r-[1.6rem] overflow-hidden before:content-[''] before:absolute before:left-1/2 before:w-[86%] before:h-[1px] before:bg-[#31313C] before:transform before:-translate-x-1/2 ${
				(categoryIndex === 0 && index === 5) || (categoryIndex === 1 && index === 1)
					? "after:content-[''] after:absolute after:left-1/2 after:w-[86%] after:h-[1px] after:bg-[#31313C] after:transform after:-translate-x-1/2"
					: ''
			}`}>
			<div
				className={`relative flex items-center justify-start gap-4 py-5 text-white text-[1.7rem] transition-all duration-300 ${
					active ? 'bg-[#333A48]' : ''
				} hover:bg-[#333A48]`}>
				<div
					className={`absolute left-0 top-1/2 w-[3px] h-9 bg-[#38ce3c] opacity-0 transform -translate-y-1/2 transition-opacity duration-300 ${
						active ? 'opacity-100' : ''
					}`}></div>
				<IconComponent className='ml-8' />
				<span className='text-3xl'>{item.title}</span>
			</div>
		</div>
	)
}
