import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-family: 'eng1 font regular';
  width: 350px;
  margin: 30px 0 0 67px;
  padding: 0 30px;

  .guide {
    font-family: 'kor font regular';
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin: 30px 0 0 37px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 30px;

  & img:hover {
    cursor: pointer;
  }
`;
