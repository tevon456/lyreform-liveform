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
        console.log("event received");
        localStorage.setItem("previewData", event.data);
      },
      false
    );
  }, []);

  if (typeof window !== "undefined") {
    previewSchema = localStorage.getItem("previewData");
    console.log(previewSchema);
  }

  return (
    <UICore.Page>
      <Head>
        <title>{JSON.parse(previewSchema)?.name || "Lyreform"}</title>
        <meta name="description" content="form created using Lyreform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content.Card width="300">
        <UICore.Text color="var(--warning)" weight="500">
          Note
        </UICore.Text>
        <UICore.Text>This is a preview version of your form.</UICore.Text>
      </Content.Card>
      <UICore.Flex justify="center">
        {JSON.parse(previewSchema) ? (
          <DynamicForm data={JSON.parse(previewSchema)} />
        ) : (
          "Loading..."
        )}
      </UICore.Flex>
    </UICore.Page>
  );
}
