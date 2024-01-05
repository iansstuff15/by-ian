import { GenericWrapperProps } from '../../data/interface/generic/wrapper.interface'

const CardBase = ({ children }: GenericWrapperProps) => {
  return (
    <div className='bg-slate-900 p-8  rounded-3xl space-y-4'>{children}</div>
  )
}
export default CardBase
