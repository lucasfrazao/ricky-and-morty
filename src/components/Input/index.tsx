import { MagnifyingGlass } from 'phosphor-react'
import { StyledInput } from './styles'

export function Input() {
  return (
    <StyledInput>
      <MagnifyingGlass size={18} />
      <input type="text" placeholder="Search..." />
    </StyledInput>
  )
}
