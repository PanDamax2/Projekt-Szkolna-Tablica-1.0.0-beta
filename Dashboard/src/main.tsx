import './styles/index.css'
import AppRouter from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from './context/useDarkMode.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 2,
			staleTime: 1000 * 60 * 5,
		},
	},
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ColorModeProvider>
				<AppRouter />
				<Toaster />
			</ColorModeProvider>
		</QueryClientProvider>
	</StrictMode>
)
