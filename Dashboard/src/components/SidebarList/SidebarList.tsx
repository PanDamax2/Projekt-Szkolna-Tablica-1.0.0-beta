import { useLocation } from 'react-router-dom'
import { CATEGORIES } from '../../constants/categories.ts'
import { Link } from 'react-router-dom'
import { SidebarLink } from '../SidebarLink/SidebarLink.tsx'
import { Category, CategoryItem } from '../../types/categories'
import { SidebarListProps } from '../../types/components/SidebarList'

export function SidebarList({ setSidebarOpen }: SidebarListProps) {
	const { pathname } = useLocation()

	return (
		<ul className='mt-6 text-white list-none font-satoshi'>
			{CATEGORIES.map((category: Category, categoryIndex: number) => (
				<li key={category.title}>
					<span
						className={`block mb-4 ml-6 text-[#8A99AF] font-bold uppercase text-[1.4rem] ${
							categoryIndex !== 0 ? 'mt-12' : ''
						}`}>
						{category.title}
					</span>

					{category.list.map((item: CategoryItem, index: number) => {
						const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== '/panel')

						return (
							<Link to={item.path} key={item.title} onClick={() => setSidebarOpen(false)}>
								<SidebarLink active={isActive} item={item} index={index} categoryIndex={categoryIndex} />
							</Link>
						)
					})}
				</li>
			))}
		</ul>
	)
}
