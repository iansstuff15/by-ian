import { SkillAnimationParams } from '@/data/interface/animation/animation-interface'
import { timeline } from '@/util/animation/animation'
export const animate = ({
  titleRef,
  subtitleRef,
  iconRef,
  containerRef,
}: SkillAnimationParams) => {
  timeline.from(containerRef.current, {
    y: 100,
    duration: 0.6,
    stagger: { amount: 1 },
    ease: 'back.inOut',
  })
  timeline.from([titleRef.current, subtitleRef.current, iconRef.current], {
    x: -10,
    opacity: 0,
    duration: 1,
    ease: 'ease.in',
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: titleRef.current,
      start: 'top 80%',
      end: 'top 80%',
      scrub: 0.8,
      toggleActions: 'restart pause reverse pause',
    },
  })
}
