import { ChangeEvent, ReactNode } from 'react'
import { Flex, Box, Heading, Select, Link, Text } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { MdArrowDropDown } from 'react-icons/md'
import { INewsResponse } from '../../interfaces/news'
import { LoadingIndicator } from '../LoadingIndicator'
import { useFetchCardData } from '../../hooks/useFetchCardData'

interface CardProps {
  icon: ReactNode
  content: INewsResponse
  staticCard?: boolean
}

export function Card({ icon, content, staticCard }: CardProps) {
  const { topic, error, loading, fetchData } = useFetchCardData({
    content,
    initialData: staticCard ? undefined : content.infos[0]
  })

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value

    fetchData(value)
  }

  return (
    <Flex
      as='article'
      flexDir='column'
      justifyContent='space-between'
      p='4'
      bg={staticCard ? 'brand.900' : 'white'}
      border='1px solid'
      borderColor={staticCard ? 'brand.900' : 'gray.100'}
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
          color={staticCard ? 'white' : 'brand.900'}
        >
          {icon}
          <Heading
            as='h2'
            fontSize='larger'
            fontWeight='medium'
          >
            {content.title}
          </Heading>
        </Flex>

        <Select
          disabled={staticCard}
          visibility={staticCard ? 'hidden' : 'visible'}
          onChange={onSelectChange}
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
          {content.infos.map((info) => {
            return <option key={info} value={info}>{info}</option>
          })}
        </Select>
      </Flex>
      <LoadingIndicator error={error} loading={loading} onError={fetchData}>
        {
          topic && Array.isArray(topic.info) ? (
            <Flex direction='column' gap={2}>
              {topic.info.map((info) => (
                <Flex key={info.text} justify='space-between' gap='2'>
                  <Text fontWeight='semibold' color='gray.500'>
                    {info.text}
                  </Text>
                  <Text fontWeight='semibold'>{info.value}</Text>
                </Flex>
              ))}
            </Flex>
          ) : (
            <Box fontSize='3xl' fontWeight='semibold' color={staticCard ? 'white' : 'brand.900'}>
              {staticCard ? (
                <Text fontSize='md' fontWeight='normal'>
                  {content.infos[0].split("positive")[0]}
                  <Text as='span' color='secondary.500'>positive</Text>
                  {content.infos[0].split("positive")[1]}
                </Text>

              ) :
                `${topic?.info}`
              }
            </Box>
          )
        }
      </LoadingIndicator>

      <Link
        href={content.learn_more.href}
        w='fit-content'
        display='flex'
        alignItems='center'
        gap='2'
        color={staticCard ? 'secondary.500' : 'brand.300'}
        fontWeight='semibold'
        textDecor='underline'
        transition='0.125s ease'
        _hover={{
          color: staticCard ? 'secondary.200' : 'brand.500'
        }}
      >
        {content.learn_more.title} {<BiRightArrowAlt />}
      </Link>

    </Flex>
  )
}
