import { useEffect, useState } from 'react'
import { CardCharacter } from '../../components/CardCharacter'
import { PageDefault } from '../../components/PageDefault'

import { CharacterProps } from '../Character'
import api from '../../services/api'
import { Container } from './styles'

export function Characters() {
  const [responseCharacters, setResponseCharacters] =
    useState<CharacterProps[]>()

  useEffect(() => {
    api.get('/character?page=1').then(response => {
      setResponseCharacters(response.data.results)
    })
  }, [])

  return (
    <PageDefault>
      <Container>
        {responseCharacters?.map(character => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </Container>
    </PageDefault>
  )
}
