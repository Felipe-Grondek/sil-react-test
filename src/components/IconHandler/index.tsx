import { Icon, IconProps } from '@chakra-ui/react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FaMedal } from 'react-icons/fa'
import { SiTrustpilot } from 'react-icons/si'
import { IconsEnum } from '../../utils/enums'

interface IconHandlerProps extends IconProps {
  id: string
}

export default function IconHandler({ id, ...props }: IconHandlerProps) {
  switch (id) {
    case IconsEnum.Medal:
      return <Icon as={FaMedal} boxSize='6' {...props} />
    case IconsEnum.List:
      return <Icon as={AiOutlineUnorderedList} boxSize='6' {...props} />
    case IconsEnum.Trust:
      return <Icon as={SiTrustpilot} boxSize='6' {...props} />
    default:
      return <></>
  }
}
