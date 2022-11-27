import { GenderNeuter, Globe, Person } from 'phosphor-react'
import { CharacterProps } from '../../pages/Character'
import { Container } from './styles'

interface CardCharacterProps {
  character: CharacterProps
}

export function CardCharacter({ character }: CardCharacterProps) {
  return (
    <Container backgroundImage={character.image}>
      <div className="card">
        <span>Rick Sanchez</span>

        <div className="resume">
          <div className="gender">
            <GenderNeuter size={14} />
            <span>Gender</span>
          </div>

          <div className="origin">
            <Globe size={14} />
            <span>Status</span>
          </div>

          <div className="status">
            <Person size={14} />
            <span>Origin</span>
          </div>
        </div>
      </div>
    </Container>
  )
}
