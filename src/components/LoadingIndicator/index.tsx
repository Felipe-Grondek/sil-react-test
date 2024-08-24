import { ReactNode } from 'react'
import { AxiosError } from 'axios'
import { Spinner } from '@chakra-ui/react'
import { ErrorDisplay } from '../ErrorDisplay'

interface ILoadingIndicator {
  loading: boolean
  error: AxiosError | null
  onError: () => void
  children: ReactNode
}

export function LoadingIndicator({
  loading,
  children,
  error,
  onError,
}: ILoadingIndicator) {
  if (loading) {
    return <Spinner size='xl' />
  }

  if (error) {
    return (
      <ErrorDisplay error={error} onError={onError} />
    )
  }

  if (children) {
    return <>{children}</>
  }

  return <></>
}
