import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;

  background-color: #e5e9ea;
  color: #00000096;  
  font-family: 'Roboto', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  z-index: 100;

  transition-duration: 1.5s;

  ${(props) =>
    props.mode === 'doing' ? { opacity: '1' } : props.mode === 'done' ? { opacity: '0', visibility: 'hidden' } : null}

  .container {
    position: relative;

    & span {
      font-weight: 800;
      font-size: 40px;
    }

    .loadContainer {
      position: relative;
      left: 96px;
      top: 10;
      height: 80px;

      & div {
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 8px;
        width: 16px;
        background: currentColor;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      }

      & div:nth-of-type(1) {
        left: 8px;
        animation-delay: 0s;
      }

      & div:nth-of-type(2) {
        left: 32px;
        animation-delay: 0.12s;
      }

      & div:nth-of-type(3) {
        left: 56px;
        animation-delay: 0.24s;
      }

      @keyframes lds-facebook {
        0% {
          top: 8px;
          height: 64px;
        }
        50%,
        100% {
          top: 24px;
          height: 32px;
        }
      }
    }
  }
`;
