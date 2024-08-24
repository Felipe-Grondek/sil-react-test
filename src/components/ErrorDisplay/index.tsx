import { Button, Center, Flex, Icon, Text } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { BiErrorAlt } from 'react-icons/bi'

interface IErrorDisplay {
  error: AxiosError
  onError: () => void
}

export function ErrorDisplay({ error, onError }: IErrorDisplay) {
  return (
    <Flex w='full' p='5' rounded='md' bg='red.100'>
      <Center w='full' justifyContent='space-between' gap='4'>
        <Icon color='red' boxSize='10' as={BiErrorAlt} />
        <Text fontWeight='bold'>
          {error.message}
        </Text>
        <Button onClick={onError} bg='gray.50'>Reload</Button>
      </Center>
    </Flex>
  )
}
