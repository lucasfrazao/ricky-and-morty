import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  > div {
    margin-top: 1rem;
  }
`

export const GroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 2rem;
  margin-top: 2rem;
`
