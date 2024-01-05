'use client'

import { AppButtonProps } from '@/data/interface/button/button.interface'
import { Button } from '@nextui-org/button'

const AppButton = ({ label, ...otherProps }: AppButtonProps) => {
  return (
    <Button size='lg' radius='full' {...otherProps}>
      <strong>{label}</strong>
    </Button>
  )
}

export default AppButton
