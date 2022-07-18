import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-family: 'eng1 font regular';
  margin-top: 40px;

  .guide {
    font-family: 'kor font regular';
    font-size: 14px;
    text-align: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;
  gap: 30px;

  & img:hover {
    cursor: pointer;
  }
`;
