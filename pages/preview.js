import Head from "next/head";
import { useEffect, useState } from "react";
import { UICore } from "../components";
import DynamicForm from "../components/dynamic_form";

export default function Preview() {
  let previewSchema = null;
  let allowedOrigins = ["http://localhost:3001", "https://app.lyreform.com"];
  useEffect(() => {
    window?.addEventListener(
      "message",
      (event) => {
        if (!allowedOrigins.includes(even.origin)) {
          console.log("no");
          return;
        }
        console.log(":", event.data);
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

      <UICore.Flex justify="center">
        {JSON.parse(previewSchema) ? (
          <DynamicForm data={JSON.parse(previewSchema)} />
        ) : (
          "loading..."
        )}
      </UICore.Flex>
    </UICore.Page>
  );
}
