import { useEffect, useState } from 'react'
import { CardCharacter } from '../../components/CardCharacter'
import { PageDefault } from '../../components/PageDefault'

import { CharacterProps } from '../Character'
import api from '../../services/api'
import { Container, GroupButtons } from './styles'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'

export function Characters() {
  const [characters, setCharacters] = useState<CharacterProps[]>()
  const [isDisabledButton, setIsDisabledButton] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  function getCharacters(page: number) {
    api.get(`/character?page=${page}`).then(response => {
      setCharacters(response.data.results)

      setIsLoading(false)
    })
  }

  function prevCharacters() {
    setCurrentPage(currentPage - 1)
    getCharacters(currentPage)
  }

  function nextCharacters() {
    setCurrentPage(currentPage + 1)
    getCharacters(currentPage)
  }

  useEffect(() => {
    getCharacters(currentPage)
  }, [])

  if (!characters) return null

  return (
    <PageDefault>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {characters?.map(character => (
              <CardCharacter key={character.id} character={character} />
            ))}
          </Container>

          <GroupButtons>
            <Button
              disabled={currentPage === 1 && isDisabledButton}
              onClick={() => prevCharacters()}
            >
              Previous Page
            </Button>
            <Button
              disabled={currentPage === 42 && isDisabledButton}
              onClick={() => nextCharacters()}
            >
              Next Page
            </Button>
          </GroupButtons>
        </>
      )}
    </PageDefault>
  )
}
