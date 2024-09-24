import { Navigate } from 'react-router-dom'
import { useAuthCheck } from '../queries/authQueries'
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'

export function PrivateRoute({ children }: { children: JSX.Element }) {
	const { data, isError, error, isLoading } = useAuthCheck()

	if (isLoading) return <LoadingSpinner text />
	if (isError || !data) {
		if (error?.message?.includes('401')) {
			return <Navigate to='/login' replace />
		}
		return <ErrorMessage message={error?.message} />
	}

	// if (!data.isVerified) {
	// 	return <Navigate to='/verify-email' replace />
	// }
	
	return children
}
