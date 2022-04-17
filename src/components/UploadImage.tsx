import { useState } from 'react'
import icon from '../assets/image.svg'
import fileIco from '../assets/file.svg'
import cloud from '../assets/cloud.svg'
import { UploadProps } from '../types/interfaces'

export default function UploadImage({ handleSubmit, setFileData }: UploadProps) {
  const [file, setFile] = useState<any>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //show filename to user
    setFile(e.target.value.split('\\')[2])
    setFileData(e.target.files)
  }

  return (
    <>
      <div className="bg-cardBg shadow-[0px_4px_12px_rgba(0,0,0,0.1)] text-center rounded-[12px] p-10">
        <h2 className="font-medium text-primary text-[16px]">Upload your image</h2>
        <p className="text-secondary text-[12px] mt-5">File should be jpeg, png,...</p>
        <label htmlFor="image">
          <div className="bg-uploadBg border-2 border-dashed border-border p-10 mt-5 rounded-[12px] hover:bg-[#ecf1f8] min-w-[22rem] max-w-[22rem] relative">
            <img src={icon} alt="" className="m-auto hover:cursor-pointer" />
            <p className="text-textUpload mt-5 text-[12px] hover:cursor-pointer">Drag & Drop your image here</p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              className="absolute top-0 left-0 w-full h-full bg-secondary hover:cursor-pointer opacity-0"
              onChange={handleUpload}
            />
          </div>
          <span>
            <p className="mt-4 mb-5 text-textUpload text-[12px]">Or</p>
            <span className="bg-button py-[8px] px-[16px] text-background rounded-[8px] hover:cursor-pointer">Choose a file</span>
          </span>
        </label>
        {!file ? null : (
          <span>
            <small className="mt-5 text-primary text-left block">Your file</small>
            <span className="flex justify-between mt-5 items-center bg-uploadBg py-3 px-2 rounded-md">
              <img src={fileIco} alt="file icon" />
              <small className="text-secondary">{file.length > 25 ? file.slice(0, 25).concat('...') : file}</small>
              <button type="submit" className="bg-sendFile py-[8px] px-[16px] text-background rounded-[8px] hover:cursor-pointer flex items-center" onClick={handleSubmit}>
                <span>
                  <img src={cloud} alt="cloud icon for upload" className="w-4" />
                </span>
              </button>
            </span>
          </span>
        )}
        <div className="flex-column space-y-5"></div>
      </div>
    </>
  )
}
