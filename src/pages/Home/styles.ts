import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 15rem);

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
    width: max-content;
    max-width: 36%;

    height: fit-content;
  }

  @media screen and (max-width: 799px) {
    .content-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin: 0;
    }

    .content-text > span {
      border-left: none;
      padding: 0;
      margin-bottom: 2rem;

      text-align: center;
    }

    .content-text > .styled-input {
      width: 100%;
      align-self: center;
    }

    .content-text > button {
      width: 100%;
      align-self: center;

      font-weight: bold;
    }

    img {
      display: none;
    }
  }
`
