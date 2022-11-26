import { Container } from './styles'

export function Error() {
  return (
    <Container>
      <div className="description">
        <h3>Sorry bro !</h3>

        <span>We couldn't find the content you're looking for.</span>
      </div>

      <img src="/assets/not-found.png" alt="image not found" />
    </Container>
  )
}
