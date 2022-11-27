import { Heart } from 'phosphor-react'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      made with <Heart size={12} weight="fill" /> by{' '}
      <a href="https://github.com/lucasfrazao" target="_blank">
        Lucas Frazão
      </a>
    </Container>
  )
}
