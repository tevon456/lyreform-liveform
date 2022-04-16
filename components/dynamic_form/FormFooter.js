import React from "react";
import { UICore } from "../";
import styled from "styled-components/macro";
import chroma from "chroma-js";
import Logo from "../../icons/logo";

function FormFooter({ body_background, controls_background }) {
  return (
    <footer
      css={`
        background: ${body_background || "#fff"};
        border-radius: 0px 0px 4px 4px;
        padding: 1em 1em;
      `}
    >
      <UICore.Flex justify="center" align="center">
        <a href="lyreform.com" target="_blank" rel="noopener noreferrer">
          <UICore.Flex align="center">
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

            <Logo
              width="22px"
              height="22px"
              colorA={
                chroma(body_background).luminance() > 0.35 ? "#6c757d" : "#fff"
              }
              colorB={
                chroma(body_background).luminance() > 0.35
                  ? "#343a40"
                  : "#ced4da"
              }
            />
          </UICore.Flex>
        </a>
      </UICore.Flex>
      <UICore.Text
        align="center"
        size="xs"
        color={chroma(body_background).luminance() > 0.35 ? "#6c757d" : "#fff"}
      >
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          style={{ color: controls_background, textDecoration: "underline" }}
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          style={{ color: controls_background, textDecoration: "underline" }}
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>{" "}
        apply.
      </UICore.Text>
    </footer>
  );
}

export default FormFooter;
