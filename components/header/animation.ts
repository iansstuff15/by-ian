import { HeaderAnimationProps } from '@/data/interface/animation/animation-interface'
import Flip from 'gsap/Flip'

export const animate = ({ state }: HeaderAnimationProps) => {
  Flip.from(state, { duration: 0.6, ease: 'power1.inOut' })
}
