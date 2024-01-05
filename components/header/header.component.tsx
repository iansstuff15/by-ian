'use client'

import { useEffect, useState, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { Menu } from 'lucide-react'
import AppButton from '../button/button.components'
import HeaderItems from './header-items/header-items'
import { animate } from './animation'
import { Flip } from 'gsap/Flip'
import { timeline } from '@/util/animation/animation'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
const Header = () => {
  const [compactHeader, setCompactHeader] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const headerRef = useRef<HTMLHeadElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const isMobile = !useMediaQuery({
    query: '(min-width: 640px)',
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    if (lenis.isScrolling) {
      console.log(lenis.isScrolling)
      gsap.to(progressRef.current, {
        height: '10vh',
      })
    } else {
      gsap.from(progressRef.current, {
        height: '10vh',
      })
    }
    lenis.on('scroll', (e: any) => {
      setScrollProgress(e.progress)
      if (e.progress == 0 || e.progress == 1) {
        setCompactHeader(false)
      } else {
        setCompactHeader(true)
      }
    })

    requestAnimationFrame(raf)
  }, [])
  return (
    <header ref={headerRef} className='fixed w-full top-0 z-40 '>
      <div
        className={`grid grid-cols-2   justify-items-end px-4 py-4 z-40 ${
          scrollProgress > 0.01 ? 'bg-white/70 backdrop-blur-3xl ' : ''
        }`}
      >
        <div
          className='justify-self-start self-center font-black text-xl sm:text-4xl cursor-pointer'
          onClick={() => {}}
        >
          {'<ByIan />'}
        </div>
        <div className='flex flex-row-reverse gap-2 lg:gap-4'>
          <AppButton label='Contact Me' variant='shadow' color='primary' />
          {scrollProgress > 0.01 || isMobile ? (
            <div className=' text-black'>
              <Menu size={50} />
            </div>
          ) : null}
          {isMobile ? null : (
            <>
              <HeaderItems
                label='Career'
                variant='light'
                reverse={compactHeader}
              />
              <HeaderItems
                label='Project'
                variant='light'
                reverse={compactHeader}
              />
              <HeaderItems
                label='Education'
                variant='light'
                reverse={compactHeader}
              />
            </>
          )}
        </div>
      </div>
      {scrollProgress > 0.01 ? (
        <div
          ref={progressRef}
          className={`h-[1vh] rounded-r-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300/90 via-blue-500/90 to-purple-600/90 backdrop-blur-lg`}
          style={{
            borderRadius:
              scrollProgress == 0.01 || scrollProgress >= 0.99 ? '0' : '',
            width: `${scrollProgress * 100}%`,
          }}
        ></div>
      ) : null}
    </header>
  )
}
export default Header
