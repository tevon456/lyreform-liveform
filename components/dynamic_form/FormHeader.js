import React from "react";
import Image from "next/image";
import styled from "styled-components/macro";
import { UICore } from "..";

const StyledFormHeader = styled.div`
  border-radius: 4px 4px 0px 0px;
  padding: 1em;
  z-index: 2;
  min-height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

/**
 * Form header
 * @prop {string} name - form name.
 * @prop {string} headerBackground - header background color.
 * @prop {string} headerColor - header text color.
 * @prop {string} logo - form logo url.
 * @prop {string} logoWidth - logo pixel width.
 * @prop {string} logoHeight - logo pixel height.
 */
function FormHeader({
  name,
  logo_url,
  header_foreground,
  header_background,
  logo_width = "64px",
  logo_height = "64px",
}) {
  return (
    <StyledFormHeader
      css={`
        background: ${header_background};
      `}
    >
      {logo_url ? (
        <Image
          src={logo_url}
          width={logo_width}
          height={logo_height}
          alt="organization's logo"
        />
      ) : null}
      <UICore.Text
        as="h1"
        size="md"
        mt="var(--space-md)"
        weight={500}
        color={header_foreground}
      >
        {name}
      </UICore.Text>
    </StyledFormHeader>
  );
}
export default FormHeader;
