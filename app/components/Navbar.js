"use client"
import React from 'react'
import { ModeToggle } from '@/components/modetoggle'
import { useSelector,useDispatch } from 'react-redux'
import { turnon } from '../redux/interactions/sidebar'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const sidebar = useSelector((state)=>state.sidebar.information)
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <nav style={{width: sidebar?"80%":"100%",
      marginLeft:sidebar?"20%":"0%",
      paddingLeft:sidebar?"40px":"50px",
      paddingRight:sidebar?"40px":"50px"}} className='bg-[#f6f6f4] text-[#1b1f1c] dark:bg-gray-800/467 transition-all duration-450 dark:text-gray-100 top-0 left-0 dark:border-b dark:backdrop-blur-[9px] fixed z-100 flex justify-between items-center p-[12px]'>
        <div className='flex justify-between items-center gap-2'>
          <div style={{opacity:sidebar?0:1,transform:sidebar?"scaleX(0)":"scaleX(1)"}} onClick={()=>dispatch(turnon())} className='w-11 hover:bg-[#f1f1ee] origin-left transpo2 p-2 cursor-pointer rounded-lg dark:hover:bg-gray-700'><img className='dark:invert' src="images/sidebar.png" alt="open" /></div>
          <div onClick={()=>router.push("/")} style={{transform:sidebar?"translateX(-48px)":"translateX(0px)"}} className='w-30.5 cursor-pointer transpo2 flex items-center'>
              <img className='dark:invert' src="/svgs/logo.svg" alt="Thoughtly" />
          </div>

        </div>

        <div className='flex gap-4 items-center'>
            <button className='bg-[#ffffff] border border-[#EBEBEB] text-xs px-[21px] cursor-pointer font-[600] py-[11px] rounded-[10px] dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700'>Sign In</button>
            <button className=' bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-[10px] text-xs border-[0.49px] border-white dark:border-none py-[11px] px-[20px] font-semibold cursor-pointer flex gap-1 dark:text-gray-900'>Sign Up</button>
            <ModeToggle />
        </div>
        
    </nav>
  )
}

export default Navbar
