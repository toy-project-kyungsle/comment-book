import styled from '@emotion/styled';

export const BookContainer = styled.div`
  width: 235px;
  height: 100%;
  margin: 0 30px;

  border: none;
  border-radius: 5px;
  overflow: hidden;

  & a {
    width: 235px;
  }
`;

export const BookImg = styled.img`
  width: 235px;
  :hover {
  }
`;

export const Wrap = styled.div`
  width: 235px;
  height: 100%;
  display: ${(props) => props.wrapDisplay};
  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.8);
  :hover {
    display: block;
  }
`;
