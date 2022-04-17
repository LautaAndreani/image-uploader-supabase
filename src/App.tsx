import { useState } from 'react'
import Loading from './components/Loading'
import UploadImage from './components/UploadImage'
import UploadInfo from './components/UploadInfo'
import { supabase } from './server'

function App() {
  const [fileData, setFileData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [filePathURL, setFilePathURL] = useState<string>('')

  // Upload to supabase
  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      if (!fileData || fileData.length === 0) {
        throw new Error('You must select an image to upload.')
      }
      const file = fileData[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`
      setFilePathURL(filePath)
      let { error: uploadError } = await supabase.storage.from('user-images').upload(filePath, file)
      if (uploadError) {
        throw uploadError
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      setIsFinished(true)
      // setTimeout(() => {
      //   setIsLoading(false)
      //   setIsFinished(true)
      // }, 2000)
    }
  }

  if (!isLoading && !isFinished) {
    return (
      <div className="flex justify-center items-center w-full bg-background min-h-screen font-['Poppins']">
        <UploadImage handleSubmit={handleSubmit} setFileData={setFileData} />
      </div>
    )
  } else if (isLoading && !isFinished) {
    return (
      <div className="flex justify-center items-center w-full bg-background min-h-screen font-['Poppins']">
        <Loading />
      </div>
    )
  } else if (!isLoading && isFinished) {
    return (
      <div className="flex justify-center items-center w-full bg-background min-h-screen font-['Poppins']">
        <UploadInfo filePathURL={filePathURL} />
      </div>
    )
  }
}

export default App
