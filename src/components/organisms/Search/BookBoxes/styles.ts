import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  width: 800px;
  height: ${(props) => props['data-height']};
  margin: 0 auto;

  animation: ${(props) => (props['data-num'] % 2 === 1 ? 'smoothLeft' : 'smoothRight')} 2s;

  @keyframes smoothLeft {
    from {
      position: relative;
      left: -150px;
      opacity: 0;
    }
    to {
      position: relative;
      left: 0px;
      opacity: 1;
    }
  }

  @keyframes smoothRight {
    from {
      position: relative;
      right: -150px;
      opacity: 0;
    }
    to {
      position: relative;
      right: 0px;
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const SmallBackGround = styled.div`
  position: absolute;
  right: ${(props) => props['data-right']};
  left: ${(props) => props['data-left']};
  bottom: 0;

  background-color: #f0f0f0;

  height: ${(props) => props['data-height']};
  width: ${(props) => props['data-width']};
`;

export const ImgDiv = styled.div`
  position: absolute;
  left: ${(props) => props['data-left']};
  bottom: ${(props) => props['data-bottom']};

  width: 170px;
`;

export const LetterDiv = styled.div`
  position: absolute;
  left: ${(props) => props['data-left']};
  bottom: ${(props) => props['data-bottom']};
`;
