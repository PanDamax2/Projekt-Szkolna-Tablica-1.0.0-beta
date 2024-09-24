import toast from 'react-hot-toast'
import { CheckCircle, XCircle } from 'lucide-react'

export const CustomToast = (message: string, type: 'success' | 'error') => {
	const icon = type === 'success' ? <CheckCircle style={{ color: 'green' }} /> : <XCircle style={{ color: 'red' }} />

	return toast.custom(
		t => (
			<div
				style={{
					background: '#fff',
					color: '#333',
					padding: '10px',
					borderRadius: '5px',
					border: '1px solid #ddd',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
				}}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					{icon}
					<span style={{ marginLeft: '10px' }}>{message}</span>
				</div>
				<button
					onClick={() => toast.dismiss(t.id)}
					style={{
						backgroundColor: 'red',
						color: '#fff',
						border: 'none',
						borderRadius: '5px',
						padding: '5px 10px',
						cursor: 'pointer',
					}}>
					Zamknij
				</button>
			</div>
		),
		{
			duration: 5000, // Czas trwania toasta
			position: 'top-right', // Ustawienie w prawym górnym rogu
		}
	)
}
