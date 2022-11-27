import { useNavigate } from 'react-router-dom'
import { GenderNeuter, Globe, Person } from 'phosphor-react'
import { CharacterProps } from '../../pages/Character'

import { Container } from './styles'

interface CardCharacterProps {
  character: CharacterProps
}

export function CardCharacter({ character }: CardCharacterProps) {
  const navigate = useNavigate()

  const navigateToCharacter = () => {
    navigate(`/character/${character.name}`)
  }

  return (
    <Container
      backgroundImage={character.image}
      role="button"
      onClick={navigateToCharacter}
    >
      <div className="card">
        <span>{character.name}</span>

        <div className="resume">
          <div className="personal">
            <div className="gender">
              <GenderNeuter size={14} />
              <span>{character.gender}</span>
            </div>

            <div className="status">
              <Person size={14} />
              <span>{character.status}</span>
            </div>
          </div>

          <div className="origin">
            <Globe size={14} />
            <span>{character.origin.name}</span>
          </div>
        </div>
      </div>
    </Container>
  )
}
