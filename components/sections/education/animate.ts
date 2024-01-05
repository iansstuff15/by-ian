import { EducationSectionAnimationParams } from '@/data/interface/animation/animation-interface'
import { timeline } from '@/util/animation/animation'
export const animate = ({
  educationTitleRef,
  achievementsTitleRef,
  professionalCertificateTitleRef,
  otherCertificationTitleRef,
  otherContainerRef,
  containerRef,
}: EducationSectionAnimationParams) => {
  timeline.from(
    [
      educationTitleRef.current,
      achievementsTitleRef.current,
      professionalCertificateTitleRef.current,
    ],
    {
      y: 10,
      opacity: 0,
      stagger: { amount: 1 },
      duration: 3.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 80%',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause',
      },
    },
  )
  timeline.from(otherCertificationTitleRef.current, {
    y: 10,
    opacity: 0,
    stagger: { amount: 1 },
    duration: 3.6,
    scrollTrigger: {
      trigger: otherContainerRef.current,
      start: 'top 80%',
      end: 'top 80%',
      scrub: 0.8,
      toggleActions: 'restart pause reverse pause',
    },
  })
}
