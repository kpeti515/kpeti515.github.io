import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  height: 100%;
  align-self: center;

  section {
    position: relative;
    width: 100px;
    height: 100px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    animation: blinking 1.4s linear infinite;
    @keyframes blinking {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: #00ff0a;
      border-radius: 50%;
      animation: blink 1s linear infinite calc(0.05s * var(--i) - 2s);
      @keyframes blink {
        0% {
          transform: scale(1);
          background-color: yellow;
          box-shadow: 0 0 10px yellow, 0 0 20px yellow, 0 0 40px yellow, 0 0 60px yellow, 0 0 80px yellow;
        }
        40% {
          background-color: orange;
          box-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 40px orange, 0 0 60px orange, 0 0 80px orange;
        }
        80%,
        100% {
          transform: scale(0);
          background-color: red;
          box-shadow: 0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 60px red, 0 0 80px red;
        }
      }
    }
  }
`;
