import Head from "next/head";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import { UICore, Content } from "../components";
import Logo from "../icons/logo";
import DynamicForm from "../components/dynamic_form";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Form() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () =>
      query.id &&
      `https://lyreform-api.herokuapp.com/v1/form/public/${query.id}`,
    fetcher
  );

  if (error)
    return (
      <UICore.Page>
        <UICore.Flex justify="center" align="center">
          <Content.Card width="300px">
            <UICore.Flex justify="center" align="center">
              <Logo width="30px" height="30px" />
            </UICore.Flex>
            <UICore.Text align="center">{error.message}</UICore.Text>
            <UICore.Flex justify="center" align="center">
              <UICore.Button
                kind="secondary"
                onClick={() => router.reload()}
                align="center"
                color="var(--neutral-100)"
              >
                Try Reloading
              </UICore.Button>
            </UICore.Flex>
          </Content.Card>
        </UICore.Flex>
      </UICore.Page>
    );
  if (!data)
    return (
      <UICore.Page>
        <UICore.Flex justify="center" align="center">
          <UICore.Loader />
        </UICore.Flex>
      </UICore.Page>
    );

  return (
    <UICore.Page>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          href="https://unpkg.com/balloon-css/balloon.min.css"
        />
        <script
          async
          src="https://www.google.com/recaptcha/api.js?render=6Ld4FvwUAAAAAGOOSWhG2OT_czBwmOr-ZACMLSfM"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UICore.Flex justify="center">
        <DynamicForm live data={data} id={query?.id} />
      </UICore.Flex>
    </UICore.Page>
  );
}
