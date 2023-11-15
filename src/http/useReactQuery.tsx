import {
    QueryKey,
    UseQueryOptions,
    useQuery
} from 'react-query'
import shoppingListAxios from './shoppingListAxios'


const useReactQuery = <T, >(path: string, queryKey: string[], options?: UseQueryOptions<T, unknown, T, QueryKey>) => {
    const { data, error, isFetching, isLoading, refetch} = useQuery<T>({
        queryKey: [...queryKey],
        queryFn: async () => {
            const { data } = await shoppingListAxios.get(
                path
            )
            return data
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        ...options
    })

    return {
        data, error, isFetching, isLoading, refetch
    }
}

export default useReactQuery