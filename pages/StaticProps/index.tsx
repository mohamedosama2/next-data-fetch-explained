import React, { Suspense } from "react";
import Axios from "axios";
import { GetStaticProps } from "next";
import { Post } from "../../models/Post";

interface SProps {
  data: Post[];
}

export default function StaticProps({ data }: SProps) {
  /*   console.log(data); */
  return (
    <Suspense fallback={<h2>Loading ....</h2>}>
      {data.map((post) => (
        <h1 key={post.id} style={{ color: "orange", textAlign: "center" }}>
          {post.title}
        </h1>
      ))}
    </Suspense>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data, status } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return {
      props: {
        data,
      },
      /*  revalidate:1 */
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
