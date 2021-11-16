import styled, { keyframes } from "styled-components";

const Frames = keyframes`
  0% { left:0px; top:0px;}
  25% { left:70px; top:0px;}
  50% { left:70px; top:0px;}
  75% { left:0px; top:0px;}
`;

const Outer = styled.div`
  width: 100px;
  height: 8px;
  padding: 2px;
  border: 2px solid #111;
  border-radius: 12px;
`;

const Inner = styled.div`
  width: 30px;
  height: 8px;
  border-radius: 12px;
  background-color: #111;
  position: relative;
  animation-name: ${Frames};
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export default function Loader() {
  return (
    <Outer>
      <Inner />
    </Outer>
  );
}
