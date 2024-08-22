import { ReactNode } from 'react';
import { Flex, Box, Heading, Select, Link } from '@chakra-ui/react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';

interface CardProps {
  icon: ReactNode
  content: string | string[]
}

export function Card({ icon, content }: CardProps) {
  return (
    <Flex
      as='article'
      flexDir='column'
      justifyContent='space-between'
      p='4'
      border='1px solid'
      borderColor='gray.100'
      rounded='md'
      boxShadow='lg'
      maxH={['44', '56']}
      minH='3xs'
    >
      <Flex justifyContent='space-between' alignItems='center' gap='4'>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          gap='2'
          color='brand.900'
        >
          {icon}
          <Heading as='h2' fontSize='larger' fontWeight='medium'>
            Title of Card
          </Heading>
        </Flex>

        <Select
          maxW='fit-content'
          border='1px solid transparent'
          icon={<MdArrowDropDown />}
          color='gray.600'
          fontWeight='medium'
          transition='0.125s ease'
          _hover={{
            bgColor: 'gray.100'
          }}
          _focusVisible={{
            borderColor: 'gray.200',
            outline: 'none'
          }}
        >
          <option value="">Valor 1</option>
          <option value="">Valor 2</option>
          <option value="">Valor 3</option>
        </Select>
      </Flex>

      {
        content && Array.isArray(content) ? (
          content.map(info => {
            return info
          })
        ) : (
          <Box>
            12.651.798
          </Box>
        )
      }



      <Link display='flex' alignItems='center' gap='2' color='brand.300' fontWeight='semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. {<BiRightArrowAlt />}
      </Link>

    </Flex>
  )
}
