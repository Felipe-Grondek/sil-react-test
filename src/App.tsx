import { Box } from '@chakra-ui/react'
import { Header } from './components/Header'
import { CardsList } from './components/CardsList'
import { Card } from './components/Card'
import { useFetchStart } from './hooks/useFetchStart'
import { LoadingIndicator } from './components/LoadingIndicator'
import IconHandler from './components/IconHandler'
import { CARD_DATA } from './resources/card'

export function App() {
  const { news, error, loading, fetchData } = useFetchStart()

  return (
    <>
      <Header />
      <Box as='main' maxW='1400px' m='auto' my={news ? -16 : 4} p={['4', '8']}>
        <LoadingIndicator error={error} loading={loading} onError={fetchData}>
          <CardsList>
            {news.map((item) => {
              return <Card key={item.title} content={item} icon={<IconHandler id={item.about} />} />
            })}
            <Card
              key={CARD_DATA.about}
              content={CARD_DATA}
              icon={<IconHandler id={CARD_DATA.about} color='secondary.500' />}
              staticCard
            />
          </CardsList>
        </LoadingIndicator>
      </Box>
    </>
  )
}
