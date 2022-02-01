import styled from '@emotion/styled';

export const Background = styled.div`
  background-color: grey;

  height: 650px;
  padding-top: 80px;
`;

export const Container = styled.div`
  width: 70%;
  /* height: 600px; */
  margin: 0 auto;
`;

export const OnePickWrapper = styled.div`
  margin-top: 20px;
`;

export const FriendName = styled.div`
  font-size: 30px;
`;

export const CurrentBook = styled.div`
  display: flex;
`;

export const CurrentImg = styled.div`
  margin-right: 30px;
  & img {
    width: 300px;
  }
`;

export const CurrentLetter = styled.div`
  .title {
    margin: 0;
    font-size: 30px;
  }
`;
