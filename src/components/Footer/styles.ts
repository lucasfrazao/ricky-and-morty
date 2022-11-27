import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.3rem;

  font-size: 0.8rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    filter: brightness(0.8);
  }
`
