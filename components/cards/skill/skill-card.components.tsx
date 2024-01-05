import { SkillCardProps } from '@/data/interface/skill/skill.interface'
import { timeline } from '@/util/animation/animation'
import gsap from 'gsap/dist/gsap'
import { useEffect, useRef } from 'react'
import { animate } from './animate'

const SkillCard = ({ title, subtitle, icon, skillsIcon }: SkillCardProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    animate({
      titleRef,
      subtitleRef,
      iconRef,
      containerRef,
    })
  }, [])

  return (
    <div
      className='bg-slate-200 px-8 xl:px-12 py-10 rounded-3xl space-y-8'
      ref={containerRef}
    >
      <div className='space-y-4'>
        {icon}
        <h1 className='text-4xl font-bold' ref={titleRef}>
          {title}
        </h1>
        <h1 ref={subtitleRef}>{subtitle}</h1>
      </div>
      <div className='grid grid-cols-4 gap-4' ref={iconRef}>
        {skillsIcon}
      </div>
    </div>
  )
}

export default SkillCard
