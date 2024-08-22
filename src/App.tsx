import { Box, Icon } from '@chakra-ui/react';
import { Header } from './components/Header';
import { CardsList } from './components/CardsList';
import { Card } from './components/Card';
import { AiOutlineEye } from 'react-icons/ai'
import { useEffect } from 'react';
import { axios } from './utils/axios';

export function App() {
  useEffect(() => {
    const fetchData = async () => {

      const data = await axios.get('/news')
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Box as='main' maxW='1400px' m='auto' p={['4', '8']}>
        <CardsList>
          {['1', '2', ['1']].map((item) => {
            return <Card content={item} icon={<Icon as={AiOutlineEye} boxSize='8' />} />
          })}
        </CardsList>
      </Box>
    </>
  )
}
