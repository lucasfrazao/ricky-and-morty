import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

import { NavigationMenu } from '../../components/NavigationMenu'
import { Error } from '../../components/Error'
import api from '../../services/api'

import { Container } from './styles'

export interface CharacterProps {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export function Character() {
  const [character, setCharacter] = useState<CharacterProps>()
  const [hasError, setHasError] = useState(false)
  const { characterName } = useParams()

  useEffect(() => {
    api
      .get(`/character/?name=${characterName}`)
      .then(response => {
        setCharacter(response.data.results[0])
      })
      .catch(error => {
        console.log(error.response.status)
        setHasError(true)
      })
  }, [])

  function formatDate(date: string) {
    return format(new Date(date), 'mm/dd/yyyy')
  }

  if (!character || hasError)
    return (
      <>
        <NavigationMenu />
        <Error />
      </>
    )

  return (
    <>
      <NavigationMenu />
      <Container>
        <div className="content-character">
          <section className="details-text">
            <h1>{character.name}</h1>
            <span>Origin: {character.origin.name}</span>
            <span>Specie: {character.species}</span>
            <span>Status: {character.status}</span>

            <span className="resume">
              {character.name} has his origin {character.origin.name}, is{' '}
              {character.species.toLowerCase()} and was created on{' '}
              {formatDate(character.created)}. Altogether it has had appearances
              in a {character?.episode.length} episodes since its inception.
            </span>
          </section>

          <section className="details-with-image">
            <img src={character.image} alt="character image" />

            <div>
              <span>{character.location.name}</span>
              <span>{character.gender}</span>
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}
