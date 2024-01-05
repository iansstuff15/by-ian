export interface HeaderItemProps {
  label: string
  reverse?: boolean
  variant:
    | 'light'
    | 'solid'
    | 'bordered'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost'
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'
}
