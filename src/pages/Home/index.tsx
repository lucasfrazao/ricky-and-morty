import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { NavigationMenu } from '../../components/NavigationMenu'

import { Container } from './styles'

export function Home() {
  const [isDisabledButton, setIsDisabledButton] = useState(true)
  const [character, setCharacter] = useState('')
  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value)

    if (event.target.value === '') {
      setIsDisabledButton(true)
    }
  }

  const navigateToCharacter = () => {
    navigate(`/character/${character}`)
  }

  return (
    <>
      <NavigationMenu />
      <Container>
        <div className="content-text">
          <h1>Rick and Morty</h1>
          <span>
            Find your favorites Rick and Morty <br /> character
          </span>
          <Input
            placeholder="Search..."
            value={character}
            onChange={handleChange}
          />

          <Button onClick={navigateToCharacter} disabled={isDisabledButton}>
            {character.length > 0 ? 'Search' : 'View all'}
          </Button>
        </div>

        <img src="/assets/background-image.png" alt="rick and morty image" />
      </Container>
    </>
  )
}
