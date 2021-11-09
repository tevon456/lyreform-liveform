import React, { useState } from "react";
import styled from "styled-components";

function Toggle(props) {
  const [toggle] = useState(props.defaultChecked);

  const mainCall = (checked) => {
    if (props.on && checked === true) {
      props.on();
    } else if (props.off && checked === false) {
      props.off();
    } else {
      console.log("no props passed");
      return null;
    }
  };

  const StyledToggle = styled.label`
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
    align: center;

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span {
      border-radius: 24px;
      position: absolute;
      border: 1px solid #38383838;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.2s;
    }

    span:before {
      border-radius: 50%;
      box-shadow: 0px 0px 6px 2px #5959591f;
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 2px;
      background-color: white;
      transition: 0.2s;
    }

    input:checked + span {
      background-color: rgb(0, 96, 230);
    }

    input:focus + span {
      box-shadow: 0 0 1px rgb(0, 96, 230);
    }

    input:checked + span:before {
      transform: translateX(16px);
      content: "";
    }
  `;
  return (
    <StyledToggle baseColor="black">
      <input
        type="checkbox"
        name={props.name}
        disabled={props.disabled}
        onChange={(e) => {
          e.persist();
          mainCall(e.target.checked);
        }}
        tabIndex={0}
        defaultChecked={toggle}
      />
      <span />
    </StyledToggle>
  );
}

export default Toggle;
