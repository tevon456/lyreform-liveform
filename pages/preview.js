import Head from "next/head";
import { useEffect, useState } from "react";
import { UICore } from "../components";
import DynamicForm from "../components/dynamic_form";

export default function Preview() {
  let [preview, setPreview] = useState(null);

  let allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://app.lyreform.com",
  ];

  useEffect(() => {
    window?.addEventListener(
      "message",
      (event) => {
        if (!allowedOrigins.includes(event.origin)) {
          return;
        }
        setPreview(JSON.parse(event.data));
        console.log(event.data);
      },
      false
    );
    // eslint-disable-next-line
  }, [preview]);

  return (
    <>
      <Head>
        <title>{preview?.name || "Lyreform"}</title>
        <meta name="description" content="form created using Lyreform" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/balloon-css/balloon.min.css"
        />
      </Head>
      <UICore.Box bg="white" width="100%">
        <UICore.Text align="center" mb="2px" mt="2px" size="sm">
          This is a preview version of your form. If you have issues with
          preview updates try closing this tab and clicking preview again from
          the builder toolbar.
        </UICore.Text>
      </UICore.Box>
      <UICore.Page>
        <UICore.Flex justify="center">
          {preview ? (
            <DynamicForm live={false} data={preview} />
          ) : (
            <UICore.Loader />
          )}
        </UICore.Flex>
      </UICore.Page>
    </>
  );
}
