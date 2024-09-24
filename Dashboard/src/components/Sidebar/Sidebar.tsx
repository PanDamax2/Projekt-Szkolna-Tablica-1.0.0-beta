import { SidebarProps } from '../../types/components/Sidebar'
import { Logo } from '../Logo/Logo'
import { SidebarList } from '../SidebarList/SidebarList'

export function Sidebar({ open, setSidebarOpen }: SidebarProps) {
	return (
		<aside
			className={`absolute left-0 top-0 z-20 flex py-8 h-screen w-[28rem] flex-col overflow-y-hidden bg-black transition-transform duration-300 lg:fixed lg:translate-x-0 lg:w-[28rem] ${
				open ? 'translate-x-0' : '-translate-x-full'
			} dark:bg-lightdark`}>

			<Logo shown />
			<SidebarList setSidebarOpen={setSidebarOpen} />
			
		</aside>
	)
}
