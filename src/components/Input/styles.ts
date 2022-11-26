import styled from 'styled-components'

export const StyledInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.5rem;
  gap: 0.5rem;

  height: 2rem;
  border: 1px #727272 solid;
  border-radius: 1rem;
  background: white;

  svg {
    color: #727272;
  }

  input {
    border: none;
    width: 80%;
    height: 80%;
  }

  input:focus-visible {
    outline: none;
  }
`
