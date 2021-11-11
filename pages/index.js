import Head from "next/head";
import { Content, UICore } from "../components";
import Logo from "../icons/logo";

export default function Home() {
  return (
    <UICore.Page>
      <Head>
        <title>Lyreform | The easy to use form builder</title>
        <meta name="description" content="Lyreform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UICore.Flex justify="center" align="center">
        <Content.Card width="300px">
          <UICore.Flex justify="center" align="center">
            <Logo width="30px" height="30px" />
          </UICore.Flex>
          <UICore.Text align="center">
            You may have gotten to this page by accident.
          </UICore.Text>
          <a href="https://lyreform.com/">
            <UICore.Text align="center" color="var(--primary)">
              Take me home
            </UICore.Text>
          </a>
        </Content.Card>
      </UICore.Flex>
    </UICore.Page>
  );
}
