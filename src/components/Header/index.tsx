import { Flex, Center, Image } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Flex as='header' w='full' h={['20', '3xs']} bg={'brand.300'}>
      <Center
        w='full'
        maxW='1400px'
        justifyContent={['center', 'flex-start', 'flex-start']}
        m='auto'
        p={['4', '8']}
      >
        <Image src={Logo} maxW={{ base: 230, sm: 350, md: 400 }} />
      </Center>
    </Flex>
  )
}
