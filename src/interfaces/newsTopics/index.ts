export interface INewsTopicResponse {
  code: string
  info: number | INewsTopicInfo
}

interface INewsTopicInfo {
  text: string
  value: number
}
