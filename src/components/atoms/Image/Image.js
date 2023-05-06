import React from 'react'

import "./Image.css"

export default function Image({imageAlt, imagePath}) {
  return (
    <img alt={imageAlt} src={imagePath} className='thumbnail' />
  )
}
