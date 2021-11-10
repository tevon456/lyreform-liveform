import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FormControls, UICore } from "..";
import { useBackground } from "../../hooks";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

export default function DynamicForm({ ...props }) {
  const [applyBackground] = useBackground();
  let {
    name,
    logo_url,
    header_foreground,
    header_background,
    body_foreground,
    body_background,
    controls_foreground,
    controls_background,
    page_background,
  } = props.data;

  let fields = props?.data?.fields || [];

  useEffect(() => {
    applyBackground(page_background || "#F7F6F2");
  }, []);

  return (
    <StyledForm
      css={`
        background: ${body_background};
      `}
    >
      <FormHeader
        logo_url={logo_url}
        name={name}
        header_background={header_background}
        header_foreground={header_foreground}
      />
      <FormBody
        css={`
          color: ${body_foreground};
        `}
      >
        <UICore.Flex justify="center" direction="column">
          {fields.map((field) => (
            <div key={field.id} className="margin-bottom--md">
              {FormControls.RenderFields(
                field,
                controls_background,
                controls_foreground
              )}
            </div>
          ))}
          <div className="margin-top--md">
            <UICore.Button
              fullWidth
              size="lg"
              type="button"
              bg={controls_background}
              color={controls_foreground}
            >
              Submit
            </UICore.Button>
          </div>
        </UICore.Flex>
      </FormBody>
      <FormFooter
        body_background={body_background}
        body_foreground={body_foreground}
      />
    </StyledForm>
  );
}

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "475px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const StyledForm = styled.form`
  max-width: 800px;
  width: 800px;
  border-radius: 0px;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 0px 2px;
`;

const FormBody = styled.div`
  @media ${device.desktopL} {
    padding-top: var(--space-xxl);
    padding-bottom: var(--space-xxl);
    padding-left: var(--space-xxl);
    padding-right: var(--space-xxl);
  }

  @media ${device.desktop} {
    padding-top: var(--space-xxl);
    padding-bottom: var(--space-xxl);
    padding-left: var(--space-xl);
    padding-right: var(--space-xl);
  }

  @media ${device.laptop} {
    padding-top: var(--space-xxl);
    padding-bottom: var(--space-xxl);
    padding-left: var(--space-lg);
    padding-right: var(--space-lg);
  }

  @media ${device.tablet} {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }

  @media ${device.mobileL} {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  }
`;
