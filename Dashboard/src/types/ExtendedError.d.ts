interface ExtendedError extends Error {
	response?: {
		data?: {
			message?: string
		}
		status?: number
	}
}

interface ApiResponse {
	message?: string
}
