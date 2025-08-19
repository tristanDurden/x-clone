import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='text-textGray text-xs flex-wrap flex gap-x-4 '>
        <Link href={'/'}>Terms of Service</Link>
        <Link href={'/'}>Privicy Policy</Link>
        <Link href={'/'}>Cookie Policy</Link>
        <Link href={'/'}>Accessibility</Link>
        <Link href={'/'}>Ads Info</Link>
        <span> 2025 XD Corp. </span>
    </div>
  )
}