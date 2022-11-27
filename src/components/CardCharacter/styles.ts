import styled from 'styled-components'

interface ContainerProps {
  backgroundImage: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 18.75rem;
  height: 18.75rem;

  font-family: 'Poppins', sans-serif;
  color: #fff;

  border-radius: 0.675rem;
  background-image: url(${props => props.backgroundImage});
  /* background-image: url('https://rickandmortyapi.com/api/character/avatar/1.jpeg'); */

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.8rem;

    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .card .resume {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
    margin-top: 0.5rem;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    span {
      margin-left: 0.5rem;
    }
  }
`
