import React, { useRef, useState } from "react";
import { UICore } from "../";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";
import Label from "../form_controls/Label";
import styled from "styled-components";
import { globals } from "./globals";
import { useDialog } from "../../hooks";

function Signature(props) {
  const {
    open: signatureOpen,
    toggle: toggleSignatureModal,
    Dialog: SignatureModal,
  } = useDialog();

  const [url, setUrl] = useState(null);
  let signatureElement = useRef(null);
  return (
    <div className="form-group">
      <Label>
        {props.label || "signature"}
        {props.required ? " *" : null}
      </Label>
      <UICore.Flex justify="flex-start" direction="column">
        <Image src={url} alt="" width="300px" height={url ? "200px" : "0px"} />
        <UICore.Button
          type="button"
          background={props.baseColor}
          color={props.checkColor}
          onClick={toggleSignatureModal}
        >
          Click to here sign{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-pencil"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={props.checkColor}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
          </svg>
        </UICore.Button>
      </UICore.Flex>

      <input
        style={{ visibility: "hidden" }}
        tabIndex="-1"
        type="text"
        ref={signatureElement}
        name={props.name}
        required={props.required}
        data-label={props.label}
        data-fieldType={props.fieldType}
      />
      <SignatureModal
        open={signatureOpen}
        close={toggleSignatureModal}
        name="Signature"
      >
        <UICore.Flex justify="center">
          <SignaturePad
            props={props}
            el={signatureElement}
            img={setUrl}
            close={toggleSignatureModal}
          />
        </UICore.Flex>
      </SignatureModal>
    </div>
  );
}

function SignaturePad(props) {
  const CanvasWrapper = styled.div`
    background: #fff;
    max-width: max-content;
    overflow: hidden;
    border: ${globals.border};
    border-radius: 4px;
    margin-block-start: 0.5em;

    & > .sigCanvas {
      background-color: rgb(248, 248, 248);
      width: 400px;
      height: 200px;
      margin-bottom: -4px;
      border-bottom: 1px solid var(--light-grey);
    }

    @media (max-width: 768px) {
      & > .sigCanvas {
        width: 370px;
      }
    }

    @media (max-width: 425px) {
      & > .sigCanvas {
        width: 360px;
      }
    }

    @media (max-width: 320px) {
      & > .sigCanvas {
        width: 300px;
      }
    }
  `;
  let sigPad = {};
  return (
    <div className="margin-bottom--xl">
      <Label small={props.small}>
        {props.label || "signature"} {props.required ? " *" : null}
      </Label>
      <CanvasWrapper maxWidth="400px">
        <SignatureCanvas
          clearOnResize={false}
          penColor="#111"
          canvasProps={{
            className: "sigCanvas",
          }}
          ref={(ref) => {
            sigPad = ref;
          }}
          throttle={24}
        />

        <UICore.Flex
          style={{ padding: "8px" }}
          justify="flex-end"
          align="center"
        >
          <UICore.ButtonGroup>
            <UICore.Button
              kind="tertiary"
              type="button"
              onClick={() => {
                sigPad.clear();
                props.el.current.value = null;
                props.img(null);
              }}
            >
              Clear
            </UICore.Button>

            <UICore.Button
              type="button"
              background={props.baseColor}
              color={props.checkColor}
              onClick={() => {
                props.el.current.value = sigPad.toDataURL();
                props.img(sigPad.toDataURL());
                props.close();
              }}
            >
              Accept and sign
            </UICore.Button>
          </UICore.ButtonGroup>
        </UICore.Flex>
      </CanvasWrapper>
      {/* <UICore.Flex>
        <UICore.Text size="sm">
          By signing this document with an electronic signature, I agree that
          such signature will be as valid as handwritten signatures and
          considered originals to the extent allowed by applicable law.
        </UICore.Text>
      </UICore.Flex> */}
    </div>
  );
}

export default Signature;
