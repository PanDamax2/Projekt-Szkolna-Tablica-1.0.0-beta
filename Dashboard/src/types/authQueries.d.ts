export interface LoginResponse {
	token?: string
	user?: {
		id: number
		name: string
		email: string
	}
	login?: string
	password?: string
}

export interface LoginRequest {
	login: string
	password: string
	message?: string
}