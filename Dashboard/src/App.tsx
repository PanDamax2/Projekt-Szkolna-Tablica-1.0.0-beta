import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// pages
import LoginPage from './pages/LoginPage'
import ViewsPage from './pages/ViewsPage'
import SliderPage from './pages/SliderPage'
import PanelLayout from './layout/PanelLayout'
import ReplacementsPage from './pages/ReplacementsPage'
import '../src/api/axios'
import { PrivateRoute } from './auth/PrivateRoute'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to='/login' replace />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/panel',
		element: (
			<PrivateRoute>
				<PanelLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: '',
				element: <p>home</p>,
			},
			{
				path: 'views',
				element: <ViewsPage />,
			},
			{
				path: 'replacements',
				element: <ReplacementsPage />,
			},
			{
				path: 'slider',
				element: <SliderPage />,
			},
			{
				path: 'announcements',
				element: <p>announcements</p>,
			},
			{
				path: 'classrooms',
				element: <p>classrooms</p>,
			},
		],
	},
])

export default function AppRouter() {
	return <RouterProvider router={router} />
}
