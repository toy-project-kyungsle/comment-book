import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SliderTopBox = css`
  width: 120px;
  font-size: 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${(props) => {
    switch (props['data-mode']) {
      case 'SliderTopBox':
        return SliderTopBox;
      default:
        return null;
    }
  }}

  .contentInner {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & div:hover {
      cursor: pointer;
      color: wheat;
    }
  }
`;
