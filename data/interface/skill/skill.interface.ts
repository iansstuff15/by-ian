import { ReactNode } from 'react'
import { CardProps } from '../card/card.interface'

export interface SkillCardProps extends CardProps {
  icon: ReactNode
  skillsIcon?: Array<ReactNode>
}
