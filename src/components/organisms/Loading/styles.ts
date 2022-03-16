import styled from '@emotion/styled';

export const Wrapper = styled.div`
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
    props['data-mode'] === 'doing'
      ? { opacity: '1' }
      : props['data-mode'] === 'done'
      ? { opacity: '0', visibility: 'hidden' }
      : null}

  .container {
    position: relative;
  }
`;
