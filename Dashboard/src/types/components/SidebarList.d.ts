export interface CategoryItem {
	title: string
	path: string
	icon: LucideIcon
}

export interface Category {
	title: string
	list: CategoryItem[]
}

interface SidebarListProps {
	setSidebarOpen: (open: boolean) => void
}