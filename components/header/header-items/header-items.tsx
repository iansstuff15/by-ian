import { useRef, useEffect } from 'react'
import AppButton from '../../button/button.components'
import { HeaderItemProps } from '@/data/interface/header/header.interface'
import { animate, reverseAnimate } from './header-items.animation'
const HeaderItems = ({
  label,
  variant,
  reverse,
  color = 'default',
}: HeaderItemProps) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(reverse)
    if (reverse) {
      reverseAnimate({ buttonContainerRef })
    } else {
      animate({ buttonContainerRef })
    }
  }, [reverse])
  return (
    <div ref={buttonContainerRef}>
      <AppButton color={color} label={label} variant={variant} />
    </div>
  )
}
export default HeaderItems
