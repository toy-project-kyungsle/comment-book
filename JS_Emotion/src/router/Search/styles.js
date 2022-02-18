import styled from '@emotion/styled';

export const Container = styled.div``;

export const Header = styled.div`
  margin: 150px 0 200px 0;

  font-family: 'Open Sans', sans-serif;
  color: #3e4756;

  .topment {
    position: relative;

    width: 300px;
    margin: 0 auto;
    .topbtn {
      position: absolute;
      left: -260px;
      bottom: -3px;

      & button {
        border: none;
        background-color: white;
      }
      & button:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Empty = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 200px;
  margin: 0 auto;
`;

export const Next = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.Left};

  font-family: 'Open Sans', sans-serif;
  color: rgb(75, 75, 75);

  .clickDiv {
    & span {
      margin-right: 10px;
    }
  }

  .clickDiv:hover {
    cursor: pointer;
  }
`;
