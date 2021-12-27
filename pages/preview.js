import Head from "next/head";
import { useEffect } from "react";
import { UICore } from "../components";
import DynamicForm from "../components/dynamic_form";

export default function Preview() {
  let previewSchema = null;
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
        console.log("event: ", event);
        console.log("event-data: ", event.data);
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
      <Head>
        <title>{JSON.parse(previewSchema)?.name || "Lyreform"}</title>
        <meta name="description" content="form created using Lyreform" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          http-equiv="Access-Control-Allow-Origin"
          content="http://localhost:3000"
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
