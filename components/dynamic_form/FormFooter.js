import React from "react";
import Link from "next/link";
import { UICore } from "../";
import styled from "styled-components/macro";
import chroma from "chroma-js";
import Logo from "../../icons/logo";

const StyledFormFooter = styled.footer`
  border-radius: 0px 0px 4px 4px;
  padding: 1em 1em;
`;

function FormFooter({ body_background }) {
  return (
    <StyledFormFooter
      css={`
        background: ${body_background || "#fff"};
      `}
    >
      <UICore.Flex justify="center" align="center">
        <UICore.Text
          size="sm"
          className="margin-top--md"
          color={
            chroma(body_background).luminance() > 0.35 ? "#343a40" : "#fff"
          }
        >
          powered by Lyreform
        </UICore.Text>
        <UICore.Space amount={1} />
        <Link href="/">
          <Logo
            width="22px"
            height="22px"
            colorA={
              chroma(body_background).luminance() > 0.35 ? "#6c757d" : "#fff"
            }
            colorB={
              chroma(body_background).luminance() > 0.35 ? "#343a40" : "#ced4da"
            }
          />
        </Link>
      </UICore.Flex>
    </StyledFormFooter>
  );
}

export default FormFooter;
