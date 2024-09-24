import { LucideIcon } from 'lucide-react'

export type CategoryItem = {
	title: string
	path: string
	icon: LucideIcon
}

export type Category = {
	title: string
	list: CategoryItem[]
}

export interface NameConversion {
	[key: string]: string
}

export type ViewMode = 'school' | 'event' | 'slider' | 'alarm' | 'assembly'

export interface ReplacementThead {
	title: string
	key: number
}
