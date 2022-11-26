import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  font-family: 'Poppins', sans-serif;

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
    margin-top: -5rem;
    margin-right: 1rem;
  }

  .content-text h1 {
    color: #f9f9f9;
  }

  .content-text > span {
    color: #f9f9f9;
    border-left: 3px solid #f9f9f9;
    padding-left: 1rem;
  }

  .content-text > button {
    align-self: flex-end;
  }

  img {
    width: 36%;
  }
`
