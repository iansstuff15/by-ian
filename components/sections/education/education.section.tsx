'use client'
import AWSIcon from '@/assets/aws-icon-white.svg'
import AppButton from '@/components/button/button.components'
import AcademicCard from '@/components/cards/academic/academic-card.component'
import CardBase from '@/components/cards/card-base.component'
import { OTHER_CERTIFICATION } from '@/data/static/education/other-certification.data'
import { timeline } from '@/util/animation/animation'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { animate } from './animate'
const EducationSection = () => {
  const educationTitleRef = useRef<HTMLHeadingElement>(null)
  const achievementsTitleRef = useRef<HTMLHeadingElement>(null)
  const professionalCertificateTitleRef = useRef<HTMLHeadingElement>(null)
  const otherCertificationTitleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const otherContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    animate({
      educationTitleRef,
      achievementsTitleRef,
      professionalCertificateTitleRef,
      otherCertificationTitleRef,
      containerRef,
      otherContainerRef,
    })
  }, [])
  return (
    <section className='px-4 lg:px-20 xl:px-32 py-16 space-y-10 text-white  bg-slate-950'>
      <div
        ref={containerRef}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'
      >
        <div className='space-y-10'>
          <h1 className='text-xl font-bold text-center' ref={educationTitleRef}>
            Education
          </h1>
          <AcademicCard
            title='BS Computer Science'
            subtitle='  Technological Institute of the Philippines - Quezon city'
            start='2019'
            end='2023'
          />
        </div>
        <div className='space-y-10'>
          <h1
            className='text-xl font-bold text-center'
            ref={achievementsTitleRef}
          >
            Academic Achievements
          </h1>
          <div className='space-y-4'>
            <AcademicCard title='DOST-SEI Scholar' start='2019' end='2023' />
            <AcademicCard title={"VPAA's Lister"} start='2019' end='2023' />
            <AcademicCard title={"Dean's lister"} start='2019' end='2023' />
            <AcademicCard title={"Dean's lister"} start='2019' end='2023' />
          </div>
        </div>
        <div className='space-y-10'>
          <h1
            className='text-xl font-bold text-center '
            ref={professionalCertificateTitleRef}
          >
            Professional Certificate
          </h1>
          <AcademicCard
            title='AWS Certified Cloud Practitioner'
            start='May 2023'
            end='May 2026'
            buttonLabel='View Certificate'
            link='https://www.credly.com/badges/2515d1c0-70ce-49f7-a76c-462e2c70bfbe/public_url'
            icon={AWSIcon}
          />
        </div>
      </div>
      <div ref={otherContainerRef} className='space-y-10'>
        <h1
          className='text-xl font-bold text-center'
          ref={otherCertificationTitleRef}
        >
          Other Certification
        </h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {OTHER_CERTIFICATION.map((certification, index) => {
            return <AcademicCard key={index} {...certification} />
          })}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
