import Head from "next/head";
import { useRouter } from "next/router";
import { UICore, Content } from "../../components";
import Logo from "../../icons/logo";

export default function Complete() {
  const { query } = useRouter();

  return (
    <UICore.Page>
      <Head>
        <title>Complete | Lyreform</title>
        <meta name="description" content="Submission complete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UICore.Flex justify="center" align="center">
        <Content.Card width="300px">
          <UICore.Flex justify="center" align="center">
            <Logo width="30px" height="30px" />
          </UICore.Flex>
          <UICore.Text align="center">
            Your submission was sent successfully.
          </UICore.Text>
          <UICore.Flex justify="center" align="center">
            <a href={`/${query.id}`}>
              <UICore.Text align="center" color="var(--primary)">
                Submit another
              </UICore.Text>
            </a>
          </UICore.Flex>
        </Content.Card>
      </UICore.Flex>
    </UICore.Page>
  );
}
