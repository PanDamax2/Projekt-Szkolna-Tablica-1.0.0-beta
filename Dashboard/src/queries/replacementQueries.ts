import axios from 'axios'
import { SERVER_URL } from '../constants/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Replacement } from '../types/components/ReplacementsPreview'
import toast from 'react-hot-toast'

const API_ENDPOINT = `${SERVER_URL}/api/replacements`

const fetchReplacements = async (): Promise<Replacement[]> => {
	const { data } = await axios.get(API_ENDPOINT)
	return data.message as Replacement[]
}

export const useGetReplacements = () => {
	return useQuery<Replacement[], Error>({
		queryKey: ['replacements'],
		queryFn: fetchReplacements,
		staleTime: 5 * 60 * 1000,
		retry: 2,
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useAddReplacement = () => {
	const queryClient = useQueryClient()

	return useMutation<Replacement, ExtendedError, Partial<Replacement>>({
		mutationFn: async newReplacement => {
			const { data } = await axios.post(API_ENDPOINT, newReplacement)
			return data
		},
		onSuccess: (data: Replacement) => {
			toast.success(data?.message || '')
			queryClient.invalidateQueries({ queryKey: ['replacements'] })
		},
		onError: error => {
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useUpdateReplacement = () => {
	const queryClient = useQueryClient()

	return useMutation<Replacement, ExtendedError, Partial<Replacement>>({
		mutationFn: async ({ id, ...updatedData }) => {
			const { data } = await axios.put(`${API_ENDPOINT}/${id}`, updatedData)
			return data
		},
		onSuccess: (data: Replacement) => {
			toast.success(data?.message || '')
			queryClient.invalidateQueries({ queryKey: ['replacements'] })
		},
		onError: error => {
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useDeleteReplacement = () => {
	const queryClient = useQueryClient()

	return useMutation<ApiResponse, ExtendedError, number>({
		mutationFn: async id => {
			const { data } = await axios.delete(`${API_ENDPOINT}/${id}`)
			return data
		},
		onSuccess: data => {
			toast.success(data?.message || 'Zastępstwo zostało usunięte.')
			queryClient.invalidateQueries({ queryKey: ['replacements'] })
		},
		onError: error => {
			console.log(error)
			toast.error(error.response?.data?.message || 'Coś poszło nie tak.')
		},
	})
}
