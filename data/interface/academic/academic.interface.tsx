import { CardProps } from '../card/card.interface'

export interface AcademicCardProps extends CardProps {
  icon?: string
  start?: string
  end?: string
  link?: string
  buttonLabel?: string
}
