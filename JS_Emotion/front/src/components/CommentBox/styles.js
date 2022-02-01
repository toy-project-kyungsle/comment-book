import styled from '@emotion/styled';

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-left: 20px;
  height: ${Number(100 / 4)}%;
  padding: 15px;

  /* border: 1px solid black; */
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);

  & p {
    margin: 0;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
  }
`;
