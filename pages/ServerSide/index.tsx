import { Suspense } from "react";
import Axios from "axios";
import { Post } from "../../models/Post";

interface SProps {
  data: Post[];
}

export default function ServerSide({ data }: SProps) {
  return (
    <>
      <Suspense fallback={<h2>Loading ....</h2>}>
        {data.map((post) => (
          <h1 key={post.id} style={{ color: "orange", textAlign: "center" }}>
            {post.title}
          </h1>
        ))}
      </Suspense>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return { props: { data } };
}
