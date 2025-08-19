import React from 'react'
import Image from 'next/image'

type Props = {}

export default function PostInteractions({}: Props) {
  return (
    <div className='flex items-center justify-between my-2 text-textGray gap-4 md:gap-8 lg:gap-16'>
        <div className='flex items-center justify-between flex-1'>
            {/* Comment */}
            <div className='flex group items-center gap-1 cursor-pointer'>
                <svg width="20" height="20" viewBox="204 255 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z"
                        className='fill-textGray group-hover:fill-iconBlue'>
                    </path>
                </svg>
                <span className='group-hover:text-iconBlue text-sm'>152</span>
            </div>
            {/* Repost */}
            <div className='flex group items-center gap-1 cursor-pointer'>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='text-textGray group-hover:text-iconGreen'>
                    <path d="M6,14V9A6,6,0,0,1,16.89,5.54" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <polyline points="8 12 6 14 4 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M18,10v5A6,6,0,0,1,7.11,18.46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <polyline points="16 12 18 10 20 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className='group-hover:text-iconGreen text-sm'>152</span>
            </div>
            {/* Like */}
            <div className='flex group items-center gap-1 cursor-pointer'>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='text-textGray group-hover:text-iconPink'>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4382 2.77841C12.2931 2.73181 12.1345 2.74311 11.9998 2.80804C11.8523 2.87913 11.7548 3.0032 11.7197 3.13821L11.244 4.97206C11.0777 5.61339 10.8354 6.23198 10.5235 6.81599C10.0392 7.72267 9.30632 8.42 8.62647 9.00585L7.18773 10.2456C6.96475 10.4378 6.8474 10.7258 6.87282 11.0198L7.68498 20.4125C7.72601 20.887 8.12244 21.25 8.59635 21.25H13.245C16.3813 21.25 19.0238 19.0677 19.5306 16.1371L20.2361 12.0574C20.3332 11.4959 19.9014 10.9842 19.3348 10.9842H14.1537C13.1766 10.9842 12.4344 10.1076 12.5921 9.14471L13.2548 5.10015C13.3456 4.54613 13.3197 3.97923 13.1787 3.43584C13.1072 3.16009 12.8896 2.92342 12.5832 2.82498L12.4382 2.77841L12.6676 2.06435L12.4382 2.77841ZM11.3486 1.45674C11.8312 1.2242 12.3873 1.18654 12.897 1.35029L13.042 1.39686L12.8126 2.11092L13.042 1.39686C13.819 1.64648 14.4252 2.26719 14.6307 3.0592C14.8241 3.80477 14.8596 4.58256 14.7351 5.34268L14.0724 9.38724C14.0639 9.439 14.1038 9.4842 14.1537 9.4842H19.3348C20.8341 9.4842 21.9695 10.8365 21.7142 12.313L21.0087 16.3928C20.3708 20.081 17.0712 22.75 13.245 22.75H8.59635C7.3427 22.75 6.29852 21.7902 6.19056 20.5417L5.3784 11.149C5.31149 10.3753 5.62022 9.61631 6.20855 9.10933L7.64729 7.86954C8.3025 7.30492 8.85404 6.75767 9.20042 6.10924C9.45699 5.62892 9.65573 5.12107 9.79208 4.59542L10.2678 2.76157C10.417 2.18627 10.8166 1.71309 11.3486 1.45674ZM2.96767 9.4849C3.36893 9.46758 3.71261 9.76945 3.74721 10.1696L4.71881 21.4061C4.78122 22.1279 4.21268 22.75 3.48671 22.75C2.80289 22.75 2.25 22.1953 2.25 21.5127V10.2342C2.25 9.83256 2.5664 9.50221 2.96767 9.4849Z"
                        fill="currentColor"
                    />
                </svg>
                <span className='group-hover:text-iconPink text-sm'>152</span>
            </div>
        </div>
        <div className='flex items-center gap-3'>
            {/* Save */}
            <div className='flex group items-center gap-1 cursor-pointer'>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='text-textGray group-hover:text-iconBlue'>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            {/* share */}
            <div className='flex group items-center gap-1 cursor-pointer'>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='text-textGray group-hover:text-iconBlue'>
                    <path d="M12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5.5 21C3.84315 21 2.5 19.6569 2.5 18C2.5 16.3431 3.84315 15 5.5 15C7.15685 15 8.5 16.3431 8.5 18C8.5 19.6569 7.15685 21 5.5 21Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18C21.5 19.6569 20.1569 21 18.5 21Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M20 13C20 10.6106 18.9525 8.46589 17.2916 7M4 13C4 10.6106 5.04752 8.46589 6.70838 7M10 20.748C10.6392 20.9125 11.3094 21 12 21C12.6906 21 13.3608 20.9125 14 20.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    </div>
  )
}