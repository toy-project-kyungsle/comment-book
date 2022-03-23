import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  width: 800px;
  height: ${(props) => props['data-Height']};
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
`;

export const SmallBackGround = styled.div`
  position: absolute;
  left: ${(props) => props['data-Left']};
  bottom: 0;

  background-color: #f0f0f0;

  height: ${(props) => props['data-Height']};
  width: ${(props) => props['data-Width']};
`;

export const ImgDiv = styled.div`
  position: absolute;
  left: ${(props) => props['data-Left']};
  bottom: ${(props) => props['data-Bottom']};

  width: 170px;
`;

export const LetterDiv = styled.div`
  position: absolute;
  left: ${(props) => props['data-Left']};
  bottom: ${(props) => props['data-Bottom']};
`;
