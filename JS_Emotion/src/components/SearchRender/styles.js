import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  width: 800px;
  height: ${(props) => props.Height};

  margin: 0 auto;
`;

export const SmallBackGround = styled.div`
  position: absolute;
  left: ${(props) => props.Left};
  bottom: 0;

  background-color: #f0f0f0;

  height: ${(props) => props.Height};
  width: ${(props) => props.Width};
`;

export const ImgDiv = styled.div`
  position: absolute;
  left: ${(props) => props.Left};
  bottom: ${(props) => props.Bottom};

  width: 170px;

  & img {
    width: 170px;
    transition: 0.5s;
  }
  & img:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const LetterDiv = styled.div`
  position: absolute;
  left: ${(props) => props.Left};
  bottom: ${(props) => props.Bottom};

  font-family: 'Noto Sans KR', sans-serif;

  .title {
    color: rgb(75, 75, 75);
    font-size: 14px;
  }

  .moreinfo {
    color: #0000007b;
    font-size: 13px;
  }

  & p {
    margin: 0;
  }
`;
