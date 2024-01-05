'use client'
import CareerCard from '@/components/cards/career/career-card.component'
import CareerAnimation from '@/assets/career-animation.json'
import Lottie from 'lottie-react'
import { History } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { timeline } from '@/util/animation/animation'
import { useMediaQuery } from 'react-responsive'
const CareerSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const carrerRef = useRef<HTMLDivElement>(null)
  const isMobile = !useMediaQuery({
    query: '(min-width: 640px)',
  })
  useEffect(() => {
    timeline.from([titleRef.current, iconRef.current], {
      x: -10,
      opacity: 0,
      duration: 3.6,
      ease: 'ease.in',
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',
        end: 'top 20%',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause',
      },
    })
  }, [])
  return (
    <section
      ref={containerRef}
      className='px-4 py-8 sm:px-20 xl:px-32 lg:py-72 w-full  space-y-10 '
    >
      <div className='grid gap-20'>
        <div className='content-center sm:flex'>
          <h1 ref={titleRef} className='text-6xl font-black  text-slate-800'>
            Career <br /> <strong className='text-slate-500'>History</strong>
          </h1>
          <div ref={iconRef}>
            <History size={isMobile ? 80 : 120} className='text-primary' />
          </div>
          <div className='lg:flex gap-4'></div>
        </div>
        <div ref={stickRef} className='space-y-20'>
          <CareerCard
            title='Software Engineer Trainee'
            company='UBX Philippines Corporation'
            start='July 2023'
            end='November 2023'
            description='Contributed to the native frontend iOS development of a project overhaul, focusing on elevating user experience and integrating new functionalities.'
          />
          <CareerCard
            title='Accenture Internship Program'
            company='Accenture Inc.'
            start='Febuary 2023'
            end='March 2023'
            description='Designed and implemented a comprehensive solution for team leave request management, leveraging PowerApps, SharePoint list, and Power Automate to enhance efficiency.'
          />
          <CareerCard
            title='IT Intern'
            company='Pearson Inc.'
            start='November 2022'
            end='Febuary 2023'
            description='Executed service activities aligned with the service catalogue, conducted data updates, and played a key role in maintaining and improving quality standards within the team. Actively participated in the development of an asset management software for internal use.'
          />
          <CareerCard
            title='Organization President'
            company='TIP-ACM student chapter'
            start='August 2021'
            end='August 2022'
            centerText={true}
          />
          <div className='lg:flex grid gap-4 sm:gap-20 lg:gap-0'>
            <CareerCard
              title='Vice President for Communications'
              company='TIP-ACM student chapter'
              start='August 2020'
              end='August 2021'
              centerText={true}
            />
            <CareerCard
              title='Junior Creatives Officer '
              company='TIP-ACM student chapter'
              start='August 2019'
              end='August 2020'
              centerText={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default CareerSection
