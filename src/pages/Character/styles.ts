import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;

  .content-character {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
    width: 67.5rem;
  }

  .content-character .details-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1rem;

    .resume {
      width: 70%;
    }
  }

  .content-character .details-with-image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .details-with-image > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    margin-top: 1rem;
  }
`
