'use client'

import { GenericWrapperProps } from '@/data/interface/generic/wrapper.interface'
import { NextUIProvider } from '@nextui-org/system'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CoreProvider = ({ children }: GenericWrapperProps) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(Flip)

  return (
    <>
      <NextUIProvider> {children}</NextUIProvider>
    </>
  )
}

export default CoreProvider
