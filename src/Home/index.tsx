import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { NavigationMenu } from '../components/NavigationMenu'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <NavigationMenu />
      <Container>
        <div className="content-text">
          <h1>Rick and Morty </h1>
          <span>
            Find your favorites rick and morty <br /> character
          </span>
          <Input />

          <Button>View all</Button>
        </div>

        <img src="/assets/background-image.png" alt="" />
      </Container>
    </>
  )
}
