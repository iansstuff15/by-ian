'use client'
import { SplashProps } from '@/data/interface/splash/splash.interface'
import { useEffect, useState } from 'react'

const SplashScreen = ({ setShowSplash }: SplashProps) => {
  const splashText = ['Engineering Systems']
  const SplashPlatforms = [
    'React',
    'NextJs',
    'Laravel',
    'GSAP',
    'TailwindCSS',
    'Supabase',
    'AWS',
    'Firebase',
    'React Native',
    'Flutter',
    'Tauri',
    'Electron',
  ]
  const [displayedPlatform, setDisplayedPlatforn] = useState(SplashPlatforms[0])
  async function iterateWithDelay() {
    for (const platform of SplashPlatforms) {
      await new Promise(resolve => setTimeout(resolve, 400))
      setDisplayedPlatforn(platform)
    }
  }
  async function exit() {
    await new Promise(resolve => setTimeout(resolve, 800))
    setShowSplash(false)
  }
  async function runAnimation() {
    await iterateWithDelay()
    await exit()
  }
  useEffect(() => {
    runAnimation()
  }, [])

  return (
    <div className='flex min-h-screen flex-col items-center p-24 place-content-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600'>
      <div className='text-end bg-slate-50 px-20 py-8 text-neutral-800 rounded-3xl space-y-4'>
        <h1 className='text-6xl font-black'>{splashText[0].toUpperCase()}</h1>
        <h2 className='text-3xl font-black text-neutral-700'>
          WITH{' '}
          <strong className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>
            {displayedPlatform.toUpperCase()}
          </strong>
        </h2>
      </div>
      <div className='text-end text-white font-black'>
        <h1>LOADING 100%</h1>
      </div>
    </div>
  )
}

export default SplashScreen
