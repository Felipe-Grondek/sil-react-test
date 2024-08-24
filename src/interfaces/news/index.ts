export interface INewsResponse {
  title: string
  about: string
  learn_more: ILearnMore
  infos: string[]
}

interface ILearnMore {
  title: string
  href: string
}
