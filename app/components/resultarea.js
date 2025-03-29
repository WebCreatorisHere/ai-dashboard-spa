import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { SectionCards } from '@/components/section-cards'
import Contact from './contact'
import { Component } from '@/components/biggraph'


const ResultArea = () => {
    const sidebar = useSelector((state) => state.sidebar.information)
    const result = useSelector((state) => state.resultindicator.value)
 


      
  return (
    <section style={{width:sidebar?"80%":"100%",
        marginLeft:sidebar?"20%":"0%",
        display:result?"block":"none"
      }} className='absolute tantada transition-all duration-500 w-full pt-20 h-full top-0 left-0'>
       <div className='flex mx-2 justify-center'>

        <SectionCards/>
        <Contact/>
       </div>
       <div className='pt-3 px-3 relative '>

        <Component/>
       </div>

    </section>
  )
}

export default ResultArea