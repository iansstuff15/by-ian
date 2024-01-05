'use client'

import SkillCard from '@/components/cards/skill/skill-card.components'
import { Globe, Monitor, Server, TabletSmartphone } from 'lucide-react'
import ReactIcon from '@/assets/react-icon.svg'
import NextIcon from '@/assets/next-icon.svg'
import LaravelIcon from '@/assets/laravel-icon.svg'
import AWSIcon from '@/assets/aws-icon.svg'
import FirebaseIcon from '@/assets/firebase-icon.svg'
import SupabaseIcon from '@/assets/supabase-icon.svg'
import PrismaIcon from '@/assets/prisma-icon.svg'
import NodeIcon from '@/assets/node-icon.svg'
import SwiftIcon from '@/assets/swift-icon.svg'
import FlutterIcon from '@/assets/flutter-icon.svg'
import ElectronIcon from '@/assets/electron-icon.svg'
import TauriIcon from '@/assets/tauri-icon.svg'
import Image from 'next/image'
import React from 'react'

const SkillSection = () => {
  return (
    <section className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 h-fit sm:px-2 lg:px-8 xl:px-24 mt-8'>
      <SkillCard
        title='Web'
        icon={<Globe size={50} className='text-blue-500' />}
        subtitle='I build front-end web applications with React, and NextJs '
        skillsIcon={[
          <Image
            key={'react-icon'}
            src={ReactIcon}
            alt='react-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'next-icon'}
            src={NextIcon}
            alt='react-icon'
            width={60}
            height={60}
          />,
        ]}
      />
      <SkillCard
        title='Backend'
        subtitle='I build backend applications with Laravel, NodeJs, Prisma, Supabase, Firebase, and AWS'
        icon={<Server size={50} className='text-blue-500' />}
        skillsIcon={[
          <Image
            key={'laravel-icon'}
            src={LaravelIcon}
            alt='react-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'node-icon'}
            src={NodeIcon}
            alt='node-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'prisma-icon'}
            src={PrismaIcon}
            alt='prisma-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'supabase-icon'}
            src={SupabaseIcon}
            alt='supabase-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'firebase-icon'}
            src={FirebaseIcon}
            alt='firebase-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'aws-icon'}
            src={AWSIcon}
            alt='aws-icon'
            width={60}
            height={60}
          />,
        ]}
      />
      <SkillCard
        title='Mobile'
        subtitle='I build mobile applications with Swift, React Native, and Flutter'
        icon={<TabletSmartphone size={50} className='text-blue-500' />}
        skillsIcon={[
          <Image
            key={'swift-icon'}
            src={SwiftIcon}
            alt='swift-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'react-native-icon'}
            src={ReactIcon}
            alt='react-native-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'flutter-icon'}
            src={FlutterIcon}
            alt='flutter-icon'
            width={60}
            height={60}
          />,
        ]}
      />

      <SkillCard
        title='Desktop'
        subtitle='I build desktop applications with Tauri, and Electron, '
        icon={<Monitor size={50} className='text-blue-500' />}
        skillsIcon={[
          <Image
            key={'tauri-icon'}
            src={TauriIcon}
            alt='tauri-icon'
            width={60}
            height={60}
          />,
          <Image
            key={'electron-native-icon'}
            src={ElectronIcon}
            alt='electron-icon'
            width={60}
            height={60}
          />,
        ]}
      />
    </section>
  )
}

export default SkillSection
