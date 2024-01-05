'use client'
import AppButton from '@/components/button/button.components'
import { Linkedin, Github } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import SplitType from 'split-type'
import { animate } from './animation'
import Me from '@/assets/me.jpg'
import gsap from 'gsap'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
const HeroSection = () => {
  const greetingContainerRef = useRef(null)
  const greetingsRef = useRef<HTMLHeadingElement>(null)
  const contractionRef = useRef(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const downloadCVButtonRef = useRef<HTMLDivElement>(null)
  const contactMeButtonRef = useRef<HTMLDivElement>(null)
  const LinkedInContainerRef = useRef<HTMLDivElement>(null)
  const GithubContainerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLImageElement>(null)
  const positionRef = useRef(null)
  const greetings = ['HI', 'أهلاً', '안녕', '你好']
  const isMobile = !useMediaQuery({
    query: '(min-width: 768px)',
  })
  const background =
    'linear-gradient(217deg,rgb(147 51 234) rgb(59 130 246), rgb(6 182 212) 70.71%)'
  const reverseBackground =
    'linear-gradient(17deg, rgb(6 182 212), rgb(59 130 246), rgb(147 51 234) 70.71%)'

  const [displayText, setDisplayText] = useState('')

  async function iterateWithDelay() {
    for (let i = 0; i < greetings.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 3000))
      gsap.from(greetingsRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      })
      setDisplayText(greetings[i])

      if (i === greetings.length - 1) {
        i = 0
      }
    }
  }

  async function runAnimation() {
    const name = new SplitType(nameRef.current!, { types: 'chars' })
    const position = new SplitType(positionRef.current!, { types: 'chars' })
    const contraction = new SplitType(contractionRef.current!, {
      types: 'chars',
    })

    const heroElements = [
      ...contraction.chars!,
      ...name.chars!,
      ...position.chars!,
    ]

    animate({
      heroElements,
      downloadCVButtonRef,
      contactMeButtonRef,
      LinkedInContainerRef,
      GithubContainerRef,
      background,
      reverseBackground,
      greetingContainerRef,
      imageContainerRef,
    })
    await iterateWithDelay()
  }

  useEffect(() => {
    runAnimation()
  }, [])
  return (
    <section className=' items-center h-fit overflow-hidden space-y-10'>
      <div className='grid md:grid-cols-2'>
        <div className='md:grid gap-8'>
          <div
            ref={greetingContainerRef}
            className={` h-[40vh] sm:h-[30vh] lg:h-[55vh] w-screen lg:w-full lg:flex content-end text-center lg:rounded-ee-3xl ${reverseBackground} overflow-hidden lg:pl-20 xl:pl-24 pt-16`}
          >
            <h1
              ref={greetingsRef}
              className={`font-black text-[150px] md:text-[180px] lg:text-[200px] xl:text-[240px]`}
            >
              {displayText}
            </h1>
          </div>

          <div className='space-y-6 p-8 lg:pl-20 xl:pl-24'>
            <div className='space-y-1 lg:space-y-4'>
              <div className='overflow-hidden'>
                <h2
                  ref={contractionRef}
                  className='text-xl md:text-3xl lg:text-6xl font-bold text-blue-500'
                >
                  Im
                </h2>
              </div>

              <div className='space-y-2  overflow-hidden'>
                <h1
                  ref={nameRef}
                  className='text-3xl lg:text-4xl  xl:text-6xl font-black'
                >
                  Diriangen Powell
                </h1>
              </div>
              <div className=' overflow-hidden'>
                <h2
                  ref={positionRef}
                  className='text-lg md:text-2xl lg:text-3xl font-medium '
                >
                  A{' '}
                  <strong className='font-black text-sky-500'>
                    Fullstack Software Engineer
                  </strong>
                </h2>
              </div>
            </div>
            <div className='sm:flex grid gap-2'>
              <div ref={downloadCVButtonRef}>
                <AppButton
                  label='Download CV'
                  className={`${isMobile ? 'w-full' : ''}`}
                />
              </div>
              <div ref={contactMeButtonRef}>
                <AppButton
                  color='primary'
                  label='Contact Me'
                  className={`${isMobile ? 'w-full' : ''}`}
                />
              </div>
            </div>
            <div className='flex gap-4 justify-center sm:justify-start'>
              <div ref={LinkedInContainerRef}>
                <Linkedin size={40} />
              </div>
              <div ref={GithubContainerRef}>
                {' '}
                <Github size={40} />{' '}
              </div>
            </div>
          </div>
        </div>
        {isMobile ? null : (
          <div className='pl-10 pt-20'>
            <div className='h-fit  text-slate-500 pl-2  overflow-hidden font-black'>
              <Image
                ref={imageContainerRef}
                src={Me}
                objectFit='cover'
                alt='photo of Diriangen Lempira Powell'
                className='rounded-l-3xl w-full h-96 object-cover'
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
