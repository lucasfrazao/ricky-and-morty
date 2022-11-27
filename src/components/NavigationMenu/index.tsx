import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export function NavigationMenu() {
  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  const navigateCharacters = () => {
    navigate('/all-characters')
  }

  return (
    <Container>
      <button onClick={() => navigateHome()}>Home</button>

      <img
        role="button"
        src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
        alt="logo rick and morty"
        onClick={() => navigateHome()}
      />
      <button onClick={() => navigateCharacters()}>Characters</button>
    </Container>
  )
}
