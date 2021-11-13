import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { UICore } from "../../components";
// import DynamicForm from "../../components/dynamic_form";

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
    () => query.id && `/v1/form/${query.id}`,
    fetcher
  );

  console.log(query);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <UICore.Page>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UICore.Flex justify="center">
        {/* <DynamicForm data={data} /> */}
      </UICore.Flex>
    </UICore.Page>
  );
}
