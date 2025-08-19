import React from 'react'
import IKImage from './Image'

type Props = {}

export default function PostInfo({}: Props) {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
        <IKImage src='public/three-dots.svg' alt='more' width={32} height={32} />
    </div>
  )
}