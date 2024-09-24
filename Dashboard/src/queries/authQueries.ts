import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { LoginRequest, LoginResponse } from '../types/authQueries'
import { useNavigate } from 'react-router-dom'

const API_ENDPOINT = 'http://localhost:5000/auth'

const fetchAuthStatus = async () => {
	try {
		const { data } = await axios.get(`${API_ENDPOINT}/check-auth`)
		return data.user


	} catch (error) {
		const axiosError = error as ExtendedError
		if (axiosError?.response?.status === 401) {
			throw new Error('401: Unauthenticated')
		}

		throw new Error(axiosError?.response?.data?.message || 'Brak połączenia z serwerem.')
	}
}

export const useAuthCheck = () => {
	return useQuery({
		queryKey: ['authStatus'],
		queryFn: fetchAuthStatus,
		retry: false,
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useLogin = () => {
	const navigate = useNavigate()

	return useMutation<LoginRequest, ExtendedError, LoginResponse>({
		mutationFn: async newData => {
			const { data } = await axios.post(`${API_ENDPOINT}/login`, newData)
			return data.message
		},
		onSuccess: () => {
			toast.success('Udało się zalogować.')
			navigate('/panel')
		},
		onError: error => {
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useLogout = () => {
    const navigate = useNavigate()

    return useMutation<void, ExtendedError, void>({
        mutationFn: async () => {
            await axios.post(`${API_ENDPOINT}/logout`)
        },
        onSuccess: () => {
            toast.success('Udało się wylogować.')
            navigate('/login')
        },
        onError: error => {
            toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
        },
    })
}