'use client'
import { CareerCardProps } from '@/data/interface/career/career.interface'
import { timeline } from '@/util/animation/animation'
import { useEffect, useRef } from 'react'
const CareerCard = ({
  title,
  company,
  start,
  end,
  description,
  centerText = false,
}: CareerCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const companyRef = useRef<HTMLHeadingElement>(null)
  const durationRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    timeline.from(
      [
        titleRef.current,
        companyRef.current,
        durationRef.current,
        descriptionRef.current,
      ],
      {
        x: -10,
        opacity: 0,
        duration: 3.6,
        ease: 'ease.in',
        stagger: { amount: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'top 30%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      },
    )
  }, [])
  return (
    <div
      ref={containerRef}
      className={`space-y-4 h-fit ${centerText ? 'lg:text-center' : ''}`}
    >
      <div>
        <h3
          ref={titleRef}
          className='font-black text-4xl lg:text-5xl text-blue-500'
        >
          {title}
        </h3>
        <h2 ref={companyRef} className='font-bold sm:text-2xl lg:text-3xl'>
          {company}
        </h2>
        <h2 ref={durationRef} className='lg:text-2xl font-normal'>
          From {start} to {end}
        </h2>
      </div>
      <p ref={descriptionRef}>{description}</p>
    </div>
  )
}

export default CareerCard
