import { ReactNode } from 'react'
import { NavigationMenu } from '../NavigationMenu'
import { Container, ContentMain } from './styles'

interface PageDefaultProps {
  children: ReactNode
}

export function PageDefault({ children }: PageDefaultProps) {
  return (
    <Container>
      <NavigationMenu />

      <ContentMain>{children}</ContentMain>
    </Container>
  )
}
