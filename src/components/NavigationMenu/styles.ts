import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4rem;
  height: 6.25rem;

  a {
    text-decoration: none;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    transition: 0.2s;
  }

  a:hover {
    color: #c0da35;
  }

  img {
    width: 10rem;
  }

  img:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 799px) {
    gap: 2rem;

    a {
      font-size: 0.8rem;
    }

    img {
      width: 6rem;
    }
  }
`
