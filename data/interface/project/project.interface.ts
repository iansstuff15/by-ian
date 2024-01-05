import { CardProps } from '../card/card.interface'

export interface ProjectCardProps extends CardProps {
  status?: 'work in-progress' | 'completed' | 'planned' | 'on-hold' | 'dropped'
  repository?: string
  website?: string
  background?: string
  titleColor?: string
}
