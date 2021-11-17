import Head from "next/head";
import { useEffect, useState } from "react";
import { Content, UICore } from "../components";
import DynamicForm from "../components/dynamic_form";

export default function Preview() {
  let previewSchema = null;
  let allowedOrigins = ["http://localhost:3001", "https://app.lyreform.com"];
  useEffect(() => {
    window?.addEventListener(
      "message",
      (event) => {
        if (!allowedOrigins.includes(event.origin)) {
          return;
        }
        localStorage.setItem("previewData", event.data);
      },
      false
    );
    // eslint-disable-next-line
  }, []);

  if (typeof window !== "undefined") {
    previewSchema = localStorage.getItem("previewData");
    console.log(previewSchema);
  }

  return (
    <>
      <UICore.Box bg="white" width="100%">
        <UICore.Text align="center" mb="2px" mt="2px" size="sm">
          This is a preview version of your form. If you have issues with
          preview updates try closing this tab and clicking preview again from
          the builder toolbar.
        </UICore.Text>
      </UICore.Box>
      <UICore.Page>
        <Head>
          <title>{JSON.parse(previewSchema)?.name || "Lyreform"}</title>
          <meta name="description" content="form created using Lyreform" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <UICore.Flex justify="center">
          {JSON.parse(previewSchema) ? (
            <DynamicForm live={false} data={JSON.parse(previewSchema)} />
          ) : (
            <UICore.Loader />
          )}
        </UICore.Flex>
      </UICore.Page>
    </>
  );
}
