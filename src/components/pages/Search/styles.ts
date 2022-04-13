import styled from '@emotion/styled';

const engFont = "'Open Sans', sans-serif";

export const Header = styled.div`
  font-family: ${engFont};

  position: relative;
  width: 90%;
  margin: 150px auto 200px auto;

  color: #3e4756;
`;

export const Empty = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 200px;
  margin: 0 auto;
`;

export const Next = styled.div`
  font-family: ${engFont};

  position: absolute;
  bottom: 0;
  left: ${(props) => props['data-left']};
  right: ${(props) => props['data-right']};

  color: rgb(75, 75, 75);
  @media (max-width: 450px) {
    bottom: -50px;
    left: inherit;
    right: 0px;
  }
`;
