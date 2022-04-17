import { useState } from "react"
import { supabase } from "../server"

export const downloadImage = async (path:string) => {
    let urlLink = "" 
    try {
      const { data, error } = await supabase.storage.from('user-images').download(path)
      if (error) {
        throw error
      }
      urlLink = URL.createObjectURL(data)
    } catch (error) {
      console.log('Error downloading image: ', error)
    }finally {
        return urlLink
    }
  }

  //UploadInfo

  export const handleCopy = (str:string) => {
    navigator.clipboard.writeText(str);
  }
