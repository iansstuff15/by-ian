'use client'
import ProjectCard from '@/components/cards/project/project-card.component'

const ProjectSection = () => {
  return (
    <section className='py-16 mt-10 space-y-8 snap-center bg-slate-900'>
      <ProjectCard
        title='Workflow'
        subtitle='A HR Management Superapp'
        status='work in-progress'
        repository='https://github.com/iansstuff15/workflow'
        background='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600'
        titleColor='text-indigo-200 '
      />
    </section>
  )
}
export default ProjectSection
