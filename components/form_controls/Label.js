import styled from "styled-components";

const Label = styled.label`
  display: block;
  position: relative;
  margin-bottom: 12px;
  font-size: ${(props) => (props.small ? "0.8em" : "1em")};
  font-weight: 600;
  width: 100%;
`;

export default Label;
