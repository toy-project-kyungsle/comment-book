import styled from '@emotion/styled';

export const Background = styled.div`
  background-color: #191970;

  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a {
    color: wheat;
    text-decoration: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
`;
