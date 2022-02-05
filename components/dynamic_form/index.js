import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { FormControls, UICore } from "..";
import router from "next/router";
import { useBackground } from "../../hooks";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import * as FormUtility from "./utils";

export default function DynamicForm({ live, id = null, ...props }) {
  const [applyBackground] = useBackground();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

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
    // eslint-disable-next-line
  }, []);

  async function formSubmit(data) {
    const fetchConfig = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };
    const url = "http://localhost:8000/v1/submission";

    grecaptcha.ready(async function () {
      const token = await grecaptcha.execute(
        "6Ld4FvwUAAAAAGOOSWhG2OT_czBwmOr-ZACMLSfM",
        {
          action: "submit",
        }
      );
      const response = await fetch(url, {
        ...fetchConfig,
        body: JSON.stringify({
          data,
          formId: id,
          token,
        }),
      });

      return response.json();
    });
  }

  return (
    <StyledForm
      method="post"
      id={`lyreform_name`}
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
            <div
              key={field.id}
              css={`
                margin-bottom: var(--space-lg);
              `}
            >
              {FormControls.RenderFields(
                field,
                body_background,
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
              disabled={submitting}
              onClick={(event) => {
                if (live && submitting === false) {
                  setSubmitting(true);
                  FormUtility.handleSubmit(
                    event,
                    (data) =>
                      formSubmit(data)
                        .then(() => {
                          router.push(`/complete/${id}`);
                          setError(false);
                          setSubmitting(false);
                        })
                        .catch((error) => {
                          console.log(error);
                          setError(true);
                          setSubmitting(false);
                        }),
                    (error) => {
                      console.log(error);
                      setError(error);
                      setSubmitting(false);
                    }
                  );
                } else {
                  setSubmitting(true);
                  FormUtility.handleSubmit(
                    event,
                    (data) => {
                      setTimeout(() => {
                        setError(false);
                        setSubmitting(false);
                      }, 4000);
                    },
                    (error) => {
                      console.log(error);
                      setError(error);
                      setSubmitting(false);
                    }
                  );
                }
              }}
              bg={controls_background}
              color={controls_foreground}
            >
              {submitting ? "Sending response..." : "Submit"}
            </UICore.Button>
          </div>
          {error ? (
            <UICore.Text color={body_foreground}>
              An error occurred while submitting, please try again
            </UICore.Text>
          ) : null}
        </UICore.Flex>
      </FormBody>
      <FormFooter
        body_background={body_background}
        body_foreground={body_foreground}
        controls_background={controls_background}
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
  border-radius: 4px;
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
