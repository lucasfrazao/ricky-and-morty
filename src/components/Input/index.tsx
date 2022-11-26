import { InputHTMLAttributes } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <StyledInput className="styled-input">
      <MagnifyingGlass size={18} />
      <input type="text" placeholder={placeholder} {...rest} />
    </StyledInput>
  )
}
