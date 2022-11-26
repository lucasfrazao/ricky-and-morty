import { MagnifyingGlass } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
import { StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <StyledInput>
      <MagnifyingGlass size={18} />
      <input type="text" placeholder={placeholder} {...rest} />
    </StyledInput>
  )
}
