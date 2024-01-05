'use client'

import CareerSection from '@/components/sections/career/career.section'
import EducationSection from '@/components/sections/education/education.section'
import FooterSection from '@/components/sections/footer/footer.section'
import HeroSection from '@/components/sections/hero/hero-section.component'
import ProjectSection from '@/components/sections/project/project-section.component'
import SkillSection from '@/components/sections/skills/skills-section.component'
import SplashScreen from '@/components/splash/splash.component'
import { useState } from 'react'

export default function Home() {
  const [showSplash, setShowSplash] = useState(false)

  return (
    <main className='min-h-screen backgroundImage text-slate-900 snap-y'>
      {showSplash ? (
        <SplashScreen setShowSplash={setShowSplash} />
      ) : (
        <>
          <HeroSection />
          <SkillSection />
          <ProjectSection />
          <CareerSection />
          <EducationSection />
          <FooterSection />
        </>
      )}
    </main>
  )
}
