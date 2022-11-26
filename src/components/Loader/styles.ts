import styled from 'styled-components'

export const ContentLoader = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 5rem;
    height: 5rem;
  }

  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    border-radius: 50%;
    border: 0.375rem solid #c0da35;
    border-color: #c0da35 transparent #c0da35 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
