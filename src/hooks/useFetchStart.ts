import { useEffect, useState } from 'react'
import { INewsResponse } from '../interfaces/news'
import { AxiosError } from 'axios'
import { axios } from '../utils/axios'

export function useFetchStart() {
  const [news, setNews] = useState<INewsResponse[]>([])
  const [error, setError] = useState<AxiosError | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  async function fetchData() {
    setLoading(true)
    try {
      const { data } = await axios.get<INewsResponse[]>('/news')
      setNews(data)
      setError(null)
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { news, error, loading, fetchData }
}
