import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { App } from './App'
import { useFetchStart } from './hooks/useFetchStart'
import { newsMock } from './tests/news.mock'

vi.mock('./hooks/useFetchStart')

vi.mocked(useFetchStart).mockReturnValue({
  news: [],
  error: null,
  loading: true,
  fetchData: vi.fn()
})

describe('App component', () => {
  it('should render Header component', () => {
    const { getByRole } = render(<App />)

    expect(getByRole('banner')).toBeDefined()
  })

  it('should render Loading component', () => {
    const { getByText } = render(<App />)

    expect(getByText('Loading...')).toBeDefined()
  })

  it('should render Cards components', () => {
    vi.mocked(useFetchStart).mockReturnValue({
      news: newsMock,
      error: null,
      loading: false,
      fetchData: vi.fn()
    })

    const { getByText } = render(<App />)

    expect(getByText(newsMock[0].title)).toBeDefined()
    expect(getByText(newsMock[1].title)).toBeDefined()
    expect(getByText('Trustpilot')).toBeDefined()
  })
})
