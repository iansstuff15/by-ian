import AppButton from '@/components/button/button.components'
import { ProjectCardProps } from '@/data/interface/project/project.interface'
import { timeline } from '@/util/animation/animation'
import { Chip } from '@nextui-org/chip'
import { Snippet } from '@nextui-org/snippet'
import { ArrowUpRight, Github, GalleryVerticalEnd } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { animate } from './animate'
import { useMediaQuery } from 'react-responsive'

const ProjectCard = ({
  title,
  subtitle,
  status,
  website,
  background,
  titleColor,
  repository,
}: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const header2Ref = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const snippetRef = useRef<HTMLDivElement>(null)
  const repositoryRef = useRef<HTMLDivElement>(null)
  const websiteRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    animate({
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
    })
  }, [])

  const isMobile = !useMediaQuery({
    query: '(min-width: 768px)',
  })
  return (
    <div
      ref={containerRef}
      className={`${background} mx-4 sm:mx-16 xl:mx-32 my-6 lg:my-40 px-4 sm:px-12 py-4 lg:py-20 rounded-3xl  space-y-10 overflow-hidden`}
    >
      <div className='text-center lg:space-y-2 justify-center'>
        <div ref={iconRef}>
          <GalleryVerticalEnd className={`mx-auto ${titleColor}`} size={50} />
        </div>

        <h1
          ref={headerRef}
          className='text-2xl lg:text-4xl font-bold text-slate-800'
        >
          Personal
        </h1>
        <h1
          ref={header2Ref}
          className={`text-4xl lg:text-6xl font-bold ${titleColor}`}
        >
          Project
        </h1>
      </div>
      <div className='grid lg:flex gap-4 lg:gap-10 items-center'>
        <div className='space-y-2 lg:space-y-8'>
          <div className='space-y-2'>
            <h1
              ref={titleRef}
              className={`${titleColor} text-4xl  sm:text-6xl font-bold`}
            >
              {title}
            </h1>
            <h1
              ref={subTitleRef}
              className='text-2xl lg:text-5xl font-bold text-slate-800'
            >
              {subtitle}
            </h1>
            <div ref={statusRef}>
              <Chip variant='dot' color='warning'>
                <strong className='text-white'>{status}</strong>
              </Chip>
            </div>
          </div>

          <br />
          {isMobile ? null : (
            <div ref={snippetRef}>
              <Snippet radius='lg' variant='solid'>
                {'git clone ' + repository + '.git'}
              </Snippet>
            </div>
          )}

          <div className='grid sm:flex gap-2 lg:gap-4'>
            <div ref={repositoryRef}>
              <AppButton
                startContent={<Github />}
                variant='bordered'
                label='Check Repository '
                className={`${isMobile ? 'w-full' : ''} text-white`}
              />
            </div>
            <div ref={websiteRef}>
              <AppButton
                endContent={<ArrowUpRight />}
                variant='shadow'
                label='Visit Project'
                className={`${isMobile ? 'w-full' : ''}`}
              />
            </div>
          </div>
        </div>
        <div
          ref={imageRef}
          className='bg-neutral-300 h-[200px] lg:h-full w-full lg:min-h-[550px] rounded-3xl shadow-cyan-500/50'
        ></div>
      </div>
    </div>
  )
}

export default ProjectCard
