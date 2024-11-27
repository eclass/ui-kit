import { FC } from 'react'
import {
  Avi,
  Csv,
  Doc,
  Docx,
  Gif,
  Jpeg,
  Jpg,
  Mkv,
  Mp3,
  Mp4,
  Pdf,
  Png,
  Ppt,
  Pptx,
  Wav,
  Xls,
  Xlsx,
  Url,
} from './index'

interface IconsProps {
  type:
    | string
    | 'avi'
    | 'csv'
    | 'doc'
    | 'docx'
    | 'gif'
    | 'jpeg'
    | 'jpg'
    | 'mkv'
    | 'mp3'
    | 'mp4'
    | 'pdf'
    | 'png'
    | 'ppt'
    | 'pptx'
    | 'wav'
    | 'xls'
    | 'xlsx'
}

export const Icons: FC<IconsProps> = ({ type }) => {
  switch (type) {
    case 'avi':
      return <Avi />
    case 'csv':
      return <Csv />
    case 'doc':
      return <Doc />
    case 'docx':
      return <Docx />
    case 'gif':
      return <Gif />
    case 'jpeg':
      return <Jpeg />
    case 'jpg':
      return <Jpg />
    case 'png':
      return <Png />
    case 'pdf':
      return <Pdf />
    case 'ppt':
      return <Ppt />
    case 'pptx':
      return <Pptx />
    case 'xls':
      return <Xls />
    case 'xlsx':
      return <Xlsx />
    case 'mp3':
      return <Mp3 />
    case 'wav':
      return <Wav />
    case 'mp4':
      return <Mp4 />
    case 'mkv':
      return <Mkv />
    case 'url':
      return <Url />
    default:
      return null
  }
}
