import styled from '@emotion/styled';

const background_color = '#988dc4';
// const font_color = '#3e4756';

export const Background = styled.div`
  background-color: ${background_color};

  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
