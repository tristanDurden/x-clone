import React from 'react'
import Search from './Search'
import PopularTags from './PopularTags'
import Recommendations from './Recommendations'
import Footer from './Footer'

type Props = {}

const RightBar = (props: Props) => {
  return (
    <div className='flex flex-col pt-4 pr-4 gap-4 sticky top-0 h-max'>
      <Search />
      <PopularTags />
      <Recommendations />
      <Footer />
    </div>
  )
}

export default RightBar