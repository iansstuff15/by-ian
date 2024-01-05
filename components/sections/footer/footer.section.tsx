'use client'
import AppButton from '@/components/button/button.components'
import { Snippet } from '@nextui-org/snippet'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { timeline } from '@/util/animation/animation'
const FooterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitbleRef = useRef<HTMLHeadingElement>(null)
  const emailSnippetRef = useRef<HTMLDivElement>(null)
  const phoneSnippetRef = useRef<HTMLDivElement>(null)
  const githubButtonRef = useRef<HTMLDivElement>(null)
  const linkedinButtonRef = useRef<HTMLDivElement>(null)
  const repositoryButtonRef = useRef<HTMLDivElement>(null)
  const dividerTextRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    timeline.from(containerRef.current, {
      y: 10,

      scaleX: 0.8,
      stagger: { amount: 1 },
      duration: 6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause',
      },
    })
    timeline.from(
      [
        titleRef.current,
        subtitbleRef.current,
        emailSnippetRef.current,
        phoneSnippetRef.current,
        githubButtonRef.current,
        linkedinButtonRef.current,
      ],
      {
        x: -10,
        opacity: 0,
        stagger: { amount: 1 },
        duration: 4.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 70%',
          scrub: 0.8,
          toggleActions: 'restart pause reverse pause',
        },
      },
    )
    timeline.from([dividerTextRef.current, repositoryButtonRef.current], {
      x: 10,
      opacity: 0,
      stagger: { amount: 1 },
      duration: 4.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'top 70%',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause',
      },
    })
  }, [])
  return (
    <footer className='bg-slate-950'>
      <div
        ref={containerRef}
        className='h-fit px-8 lg:px-32 py-12 lg:py-36  space-y-20 rounded-t-3xl text-white bg-slate-900'
      >
        <div className='lg:flex'>
          <div className=' space-y-10'>
            <div>
              <h1 ref={titleRef} className=' lg:text-3xl font-black'>
                Wanna work together?
              </h1>
              <h2
                ref={subtitbleRef}
                className='text-4xl lg:text-6xl font-black text-indigo-200'
              >
                Contact Me
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
              <div ref={emailSnippetRef}>
                <Snippet
                  symbol='@'
                  variant='bordered'
                  className='rounded-full text-white w-full'
                >
                  dlpowell35@gmail.com
                </Snippet>
              </div>
              <div ref={phoneSnippetRef}>
                <Snippet
                  symbol='#'
                  variant='bordered'
                  className='rounded-full text-white w-full'
                >
                  09604471706
                </Snippet>
              </div>
              <div ref={githubButtonRef}>
                <AppButton
                  label='GitHub'
                  startContent={<Github />}
                  endContent={<ArrowUpRight />}
                  className='w-full'
                />
              </div>
              <div ref={linkedinButtonRef}>
                <AppButton
                  label='LinkedIn'
                  startContent={<Linkedin />}
                  endContent={<ArrowUpRight />}
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='text-center space-y-2 lg:space-y-4'>
          <h1 ref={dividerTextRef}>
            Checkout the how the portfolio is made here
          </h1>
          <div ref={repositoryButtonRef}>
            <AppButton
              className='text-white'
              label='Github Repository'
              variant='light'
              endContent={<ArrowUpRight />}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
