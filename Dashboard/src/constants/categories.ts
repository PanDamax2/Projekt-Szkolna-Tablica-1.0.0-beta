import { LayoutDashboard, Table, Layers, NotebookPen, Settings, Users, Images } from 'lucide-react'
import { Category, NameConversion, ReplacementThead, ViewMode } from '../types/categories'

export const CATEGORIES: Category[] = [
	{
		title: 'Strony',
		list: [
			{
				title: 'Panel',
				path: '/panel',
				icon: LayoutDashboard,
			},
			{
				title: 'Widok',
				path: '/panel/views',
				icon: Layers,
			},
			{
				title: 'Zastępstwa',
				path: '/panel/replacements',
				icon: Table,
			},
			{
				title: 'Slider',
				path: '/panel/slider',
				icon: Images,
			},
			{
				title: 'Ogłoszenia',
				path: '/panel/announcements',
				icon: NotebookPen,
			},
			{
				title: 'Sale',
				path: '/panel/classrooms',
				icon: Table,
			},
		],
	},
	{
		title: 'Opcje',
		list: [
			{
				title: 'Użytkownicy',
				path: '/panel/uzytkownicy',
				icon: Users,
			},
			{
				title: 'Ustawienia',
				path: '/panel/ustawienia',
				icon: Settings,
			},
		],
	},
]

export const NAME_CONVERSION: NameConversion = {
	panel: 'panel',
	views: 'widok',
	replacements: 'zastępstwa',
	slider: 'slider',
	announcements: 'ogłoszenia',
	classrooms: 'sale',

	// uzytkownicy: 'użytkownicy',
	// ustawienia: 'ustawienia',
	// dodaj: 'dodaj użytkownika',
}

export const viewModes: { value: ViewMode; label: string }[] = [
	{ value: 'school', label: 'Szkolny' },
	{ value: 'event', label: 'Slider i ogłoszenia' },
	{ value: 'slider', label: 'Slider' },
	{ value: 'alarm', label: 'Alarm' },
	{ value: 'assembly', label: 'Zebranie' },
]

export const REPLACEMENTS: ReplacementThead[] = [
	{ title: 'Lekcja', key: 0 },
	{ title: 'Nauczyciel', key: 1 },
	{ title: 'Odział', key: 2 },
	{ title: 'Przedmiot', key: 3 },
	{ title: 'Sala', key: 4 },
	{ title: 'Zastępca', key: 5 },
	{ title: 'Okres', key: 6 },
]

// export const USER_NAME_TABLE = [
// 	{ title: 'Avatar', key: 0 },
// 	{ title: 'Imię', key: 1 },
// 	{ title: 'Nazwisko', key: 2 },
// 	{ title: 'Login', key: 3 },
// 	{ title: 'Email', key: 4 },
// 	{ title: 'Admin', key: 5 },
// 	{ title: 'Akcje', key: 6 },
// ]
