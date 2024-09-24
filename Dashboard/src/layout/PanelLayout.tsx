import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Navbar } from '../components/Navbar/Navbar'
import { useEffect, useRef, useState } from 'react'
import { Footer } from '../components/Footer/Footer'

export default function PanelLayout() {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
	const sidebarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
				setSidebarOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleOpenSidebar = () => setSidebarOpen(!sidebarOpen)

	return (
		<main className='flex'>
			<div
				ref={sidebarRef}
				className='flex-1 w-16 max-w-max min-h-screen bg-gray-900 lg:w-full lg:max-w-md lg:pl-[28rem]'>
				<Sidebar open={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			</div>
			<div className='flex flex-col flex-3 w-full'>
				<Navbar onclick={handleOpenSidebar} />
				<Outlet />
				<Footer />
			</div>
		</main>
	)
}
