import { AcademicAnimationParams } from '@/data/interface/animation/animation-interface'
import { timeline } from '@/util/animation/animation'
export const animate = ({
  containerRef,
  titleRef,
  subtitleRef,
  certifiedDateRef,
  buttonRef,
  iconRef,
}: AcademicAnimationParams) => {
  timeline.from(containerRef.current, {
    y: 10,
    opacity: 0,
    stagger: { amount: 1 },
    duration: 6,
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 40%',
      end: 'top 30%',
      scrub: 0.8,
      toggleActions: 'restart pause reverse pause',
    },
  })
  timeline.from(
    [
      iconRef.current,
      titleRef.current,
      subtitleRef.current,
      certifiedDateRef.current,
      buttonRef.current,
    ],
    {
      x: -10,
      opacity: 0,
      stagger: { amount: 1 },
      duration: 4.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',
        end: 'top 40%',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause',
      },
    },
  )
}
