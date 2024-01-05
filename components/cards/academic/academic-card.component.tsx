'use client'
import { AcademicCardProps } from '@/data/interface/academic/academic.interface'
import CardBase from '../card-base.component'
import AppButton from '@/components/button/button.components'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { animate } from './animate'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const AcademicCard = ({
  title,
  subtitle,
  start,
  end,
  link,
  icon,
  buttonLabel,
}: AcademicCardProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const certifiedDateRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  useEffect(() => {
    animate({
      titleRef,
      subtitleRef,
      certifiedDateRef,
      containerRef,
      buttonRef,
      iconRef,
    })
  }, [])
  return (
    <div ref={containerRef}>
      <CardBase>
        <div ref={iconRef}>
          {icon ? (
            <Image
              key={'aws-icon'}
              src={icon}
              alt='aws-icon'
              width={60}
              height={60}
              className='rounded-md'
            />
          ) : null}
        </div>
        <h2 ref={titleRef} className='text-xl font-bold'>
          {title}
        </h2>
        <h3 ref={subtitleRef} className='text-sm font-bold'>
          {subtitle}
        </h3>
        <h2 ref={certifiedDateRef} className='text-sm font-medium'>
          {start} - {end ?? 'No Expiration'}
        </h2>
        <div ref={buttonRef}>
          {buttonLabel && link ? (
            <Link href={link} target='_blank'>
              <AppButton variant='solid' color='primary' label={buttonLabel} />
            </Link>
          ) : null}
        </div>
      </CardBase>
    </div>
  )
}
export default AcademicCard
