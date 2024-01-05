import { HeroAnimationParams } from '@/data/interface/animation/animation-interface'
import { timeline } from '@/util/animation/animation'
import gsap from 'gsap'
export const animate = ({
  heroElements,
  downloadCVButtonRef,
  contactMeButtonRef,
  LinkedInContainerRef,
  GithubContainerRef,
  greetingContainerRef,
  background,
  reverseBackground,
  imageContainerRef,
}: HeroAnimationParams) => {
  timeline.from(greetingContainerRef.current, {
    width: 0,
    duration: 0.4,
    ease: 'ease.in',
  })
  timeline.from(imageContainerRef.current, {
    width: 0,
    duration: 0.4,
    ease: 'ease.in',
  })
  timeline.from(heroElements, {
    y: 100,
    duration: 0.6,
    stagger: { amount: 1 },
    ease: 'back.inOut',
  })
  timeline.from(downloadCVButtonRef.current, {
    x: -24,
    opacity: 0,
    duration: 0.6,
    ease: 'ease.in',
  })
  timeline.from(contactMeButtonRef.current, {
    x: -24,
    opacity: 0,
    duration: 0.6,
    ease: 'east.in',
  })
  timeline.from(LinkedInContainerRef.current, {
    x: -24,
    opacity: 0,
    duration: 0.6,
    ease: 'ease.in',
  })
  timeline.from(GithubContainerRef.current, {
    x: -24,
    opacity: 0,
    duration: 0.6,
    ease: 'ease.in',
  })
  gsap.fromTo(
    greetingContainerRef.current,
    { background: background },
    {
      ease: 'none',
      duration: 30,
      background: reverseBackground,
      repeat: -1,
      yoyo: true,
    },
  )
}
