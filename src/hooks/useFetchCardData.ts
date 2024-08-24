import { useEffect, useState } from 'react'
import { INewsResponse } from '../interfaces/news'
import { AxiosError } from 'axios'
import { axios } from '../utils/axios'
import { INewsTopicResponse } from '../interfaces/newsTopics'

interface IUseFetchCardData {
  content: INewsResponse
  initialData?: string
}

export function useFetchCardData({ content, initialData }: IUseFetchCardData) {
  const [topic, setTopic] = useState<INewsTopicResponse | null>(null)
  const [error, setError] = useState<AxiosError | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  async function fetchData(topicCode?: string) {
    if (content.title === 'Trustpilot') {
      return
    }

    setLoading(true)
    try {
      const topic = content.about.toLowerCase()
      const code = topicCode?.toLowerCase()
      const url = `/${topic}-${code}`

      const { data } = await axios.get<INewsTopicResponse>(url)
      setTopic(data)
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
    fetchData(initialData || content.infos[0])
  }, [initialData, content])

  return { topic, error, loading, fetchData }
}
