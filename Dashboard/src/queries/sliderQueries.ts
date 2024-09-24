import axios from 'axios'
import { SERVER_URL } from '../constants/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { SliderData } from '../types/components/SliderPreview'

const API_ENDPOINT = `${SERVER_URL}/api/slider`

const fetchSlider = async () => {
	const { data } = await axios.get(API_ENDPOINT)
	return data.message
}

export const useGetSlider = () => {
	return useQuery({
		queryKey: ['slider'],
		queryFn: fetchSlider,
		staleTime: 5 * 60 * 1000,
		retry: 2,
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useAddSlider = () => {
	const queryClient = useQueryClient()
	return useMutation<SliderData, ExtendedError, string>({
		mutationFn: async file => {
			const { data } = await axios.post(API_ENDPOINT, { file: file })
			return data
		},
		onSuccess: data => {
			toast.success(data?.message || '')
			queryClient.invalidateQueries({ queryKey: ['slider'] })
		},
		onError: error => {
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useUpdateSlider = () => {
	const queryClient = useQueryClient()
	return useMutation<SliderData, ExtendedError, { id: string; file: File }>({
		mutationFn: async ({ id, file }: { id: string; file: File }) => {
			const formData = new FormData()
			formData.append('file', file)
			const { data } = await axios.put(`${API_ENDPOINT}/${id}`, formData)
			return data
		},
		onSuccess: data => {
			toast.success(data?.message || '')
			queryClient.invalidateQueries({ queryKey: ['slider'] })
		},
		onError: error => {
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useDeleteSlider = () => {
	const queryClient = useQueryClient()
	return useMutation<SliderData, ExtendedError, string>({
		mutationFn: async id => {
			const { data } = await axios.delete(`${API_ENDPOINT}/${id}`)
			return data
		},
		onSuccess: data => {
			toast.success(data?.message || 'Zdjęcie zostało usunięte.')
			queryClient.invalidateQueries({ queryKey: ['slider'] })
		},
		onError: error => {
			console.log(error)
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}
