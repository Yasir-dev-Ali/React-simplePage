import React from 'react'
import ImageCard from './ImageCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Images = ({images}) => {
  return (
    <div>
      <ImageCard/>
      <FontAwesomeIcon icon="fa-regular fa-user" style={{color: "#63E6BE",}} />

    </div>
  )
}

export default Images
