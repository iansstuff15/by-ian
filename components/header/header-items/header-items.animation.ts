import { HeaderItemsAnimationParams } from '@/data/interface/animation/animation-interface'
import gsap from 'gsap'

const timeline = gsap.timeline()
export const animate = ({ buttonContainerRef }: HeaderItemsAnimationParams) => {
  timeline.play()
  timeline.fromTo(
    buttonContainerRef.current,
    {
      x: 12,
      opacity: 0,
      ease: 'ease.in',
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'ease.in',
    },
  )
}
export const reverseAnimate = ({
  buttonContainerRef,
}: HeaderItemsAnimationParams) => {
  gsap.to(
    buttonContainerRef.current,

    {
      x: 12,
      opacity: 0,
      duration: 0.2,
      ease: 'ease.out',
    },
  )
}
