import { ProjectAnimationParams } from '@/data/interface/animation/animation-interface'
import { timeline } from '@/util/animation/animation'
export const animate = ({
  containerRef,
  iconRef,
  headerRef,
  header2Ref,
  titleRef,
  subTitleRef,
  statusRef,
  snippetRef,
  repositoryRef,
  websiteRef,
  imageRef,
}: ProjectAnimationParams) => {
  timeline.from([iconRef.current, headerRef.current, header2Ref.current], {
    y: -10,
    opacity: 0,
    duration: 3.6,
    ease: 'ease.in',
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 80%',
      end: 'top 70%',
      scrub: 0.8,
      toggleActions: 'restart pause reverse pause',
    },
  })
  timeline.from(containerRef.current, {
    width: '100vw',
    // height: '400vh',
    borderRadius: 0,
    margin: 0,
    duration: 2.5,
    ease: 'ease.out',
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 50%',
      end: 'top 20%',
      scrub: 0.8,
      toggleActions: 'restart pause reverse pause',
    },
  })
  timeline.from(
    [
      titleRef.current,
      subTitleRef.current,
      statusRef.current,
      snippetRef.current,
      repositoryRef.current,
      websiteRef.current,
    ],
    {
      x: -20,
      opacity: 0,
      duration: 7.2,
      ease: 'ease.in',
      stagger: { amount: 1 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 20%',
        end: 'top 20%',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause',
      },
    },
  )
  timeline.from(imageRef.current, {
    y: 20,
    opacity: 0,
    duration: 7.2,
    ease: 'ease.in',
    stagger: { amount: 1 },
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 20%',
      end: 'top 20%',
      scrub: 0.8,
      toggleActions: 'restart pause reverse pause',
    },
  })
}
