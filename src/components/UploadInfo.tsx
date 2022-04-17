import { useEffect, useState } from 'react'
import check from '../assets/check.svg'
import { downloadImage } from '../utils/utils'
import defaultImg from '../assets/default-img.svg'
// import { getImage } from '../utils/utils'

interface Props {
  filePathURL: string
}

export default function UploadInfo({ filePathURL }: Props) {
  const [url, setUrl] = useState<string>('')
  useEffect(() => {
    downloadImage(filePathURL).then((res) => setUrl(res))
  }, [])

  return (
    <div className="bg-cardBg shadow-[0px_4px_12px_rgba(0,0,0,0.1)] text-center rounded-[12px] p-10 flex-column">
      <img src={check} alt="ícono de subida satisfactoria" className="bg-[#219653] rounded-full px-2 py-2 m-auto" />
      <p className="mt-5 text-primary font-medium">Uploaded Succesfully !</p>
      <img src={!url ? defaultImg : url} alt="imagen del usuario" className="rounded-[12px] object-cover mt-5 min-w-[100%] max-w-[30rem] max-h-[25rem] m-auto" />
      <div className="mt-5 w-full border-2 border-borderLink rounded-[12px] flex items-center overflow-hidden max-w-[31rem] p-2 justify-between">
        <p className="overflow-hidden max-w-[78%] whitespace-nowrap">{url.slice(5)}</p>
        <button type="button" className="bg-button py-[8px] px-[16px] text-background rounded-[8px] hover:cursor-pointer flex items-center text-[13px]">
          Copy Link
        </button>
      </div>
    </div>
  )
}
