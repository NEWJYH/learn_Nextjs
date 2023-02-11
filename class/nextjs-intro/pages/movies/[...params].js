import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: {
      params,
    },
  };
}
