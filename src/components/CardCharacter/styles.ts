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

  transition: 0.2s;

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
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 1rem;
    margin-top: 0.5rem;

    font-size: 0.8rem;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    span {
      margin-left: 0.5rem;
    }
  }

  .card .resume .personal {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`
