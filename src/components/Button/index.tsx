import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <Container onClick={onClick}>{children}</Container>
}
