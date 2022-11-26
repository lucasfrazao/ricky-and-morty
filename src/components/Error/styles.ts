import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding: 1rem;

  font-family: 'Poppins', sans-serif;
  color: #fff;

  img {
    max-width: 36%;
    /* width: max-content;

    height: fit-content; */
  }

  @media screen and (max-width: 799px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    text-align: center;

    > span {
      padding: 2rem;
    }

    img {
      max-width: 36%;
      width: max-content;

      height: fit-content;
    }
  }
`
