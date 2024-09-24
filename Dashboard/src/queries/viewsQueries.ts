import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { SERVER_URL } from '../constants/api'
import toast from 'react-hot-toast'
import { ViewsData } from '../types/viewsQueries'

const API_ENDPOINT = `${SERVER_URL}/api/views/1`

const fetchViews = async (): Promise<ViewsData> => {
	const { data } = await axios.get(API_ENDPOINT)
	return data.message
}

export const useGetViews = () => {
	return useQuery<ViewsData, Error>({
		queryKey: ['views'],
		queryFn: fetchViews,
		staleTime: 5 * 60 * 1000, 
		retry: 2,
	})
}

////////////////////////////////////////////////////////////////////////////////

export const useUpdateViews = () => {
	const queryClient = useQueryClient()

	return useMutation<ViewsData, ExtendedError, FormData, { previousData: unknown }>({
		mutationFn: data => axios.put(API_ENDPOINT, data).then(res => res.data),
		onMutate: async (newData: FormData) => {
			await queryClient.cancelQueries({ queryKey: ['views'] })

			const previousData = queryClient.getQueryData(['views'])

			queryClient.setQueryData(['views'], (old: unknown) => {
				if (typeof old === 'object' && old !== null) {
					return { ...old, ...newData }
				}
				return newData
			})

			return { previousData }
		},
		onError: error => {
			const errorMessage = error.response?.data?.message 
			console.error(errorMessage)
			toast.error(errorMessage ||'Coś poszło nie tak.')
		},
		onSuccess: (data: ViewsData) => {
			toast.success(data?.message || '')
			queryClient.invalidateQueries({ queryKey: ['views'] })
		},
	})
}
