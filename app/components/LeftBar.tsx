import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { menuList } from '../libs/menuList'

type Props = {}

const LeftBar = (props: Props) => {
  return (
    <div className='flex flex-col sticky top-0 h-screen justify-between pt-2 pb-8'>
      {/* Logo and menu */}
      <div className='flex flex-col items-center lg:items-start'>
        {/* Logo */}
        <Link href="/" className='py-3 px-2 hover:bg-[#eccaca] rounded-full'>
          <Image src="/star-logo.svg" alt="logo" width={32} height={32} />
        </Link>
        {/* Menu List */}
        <div className='flex flex-col'>
          {menuList.map((item) => {
            return (
              <Link href={item.href}
                    key={item.id}
                    className='flex p-2 rounded-full hover:bg-[#eccaca] items-center gap-4'
                    >
                <Image src={item.icon} alt={item.name} width={32} height={32}/>
                <span className='hidden lg:inline'>{item.name}</span>
              </Link>
            )
          })}
        </div>
        {/* Post Button */}
        <Link href={'/'} className='py-2 px-4 flex gap-4 bg-slate-300 text-white rounded-full hover:bg-[#eccaca]'>
          <Image 
            src={'write.svg'} 
            alt='new post' 
            width={32} 
            height={32} 
            className='lg:hidden'
            />
          <span className='hidden lg:inline px-20'>Post</span>
        </Link>
      </div>
      {/* User */}
      <div className='flex items-center justify-between gap-2 p-2 mx-auto'>
        <div className='rounded-full border w-10 h-10 overflow-hidden relative'> {/* relative & overflow to fill child image */}
          <Image src={'next.svg'} alt='avatar' fill className='p-2'/> {/*fill parents div */}
        </div>
        <div className='flex-col text-xs hidden lg:flex'>
          <span className='font-bold'>Dima Dev</span>
          <span className='text-sm text-textGray'>@shprotnikdev</span>
        </div>
        <div className='hidden lg:block cursor-pointer font-bold'>
          <Image src={'three-dots.svg'} alt='more' width={24} height={24} />
        </div>
      </div>
    </div>
  )
}

export default LeftBar