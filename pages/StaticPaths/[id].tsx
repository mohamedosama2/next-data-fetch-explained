import React from "react";
import Axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "../../models/Post";

interface IProps {
  post: Post;
}

export default function StaticPaths({ post }: IProps) {
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, status } = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  /*   console.log(data); */
  const dataAll = data.map((post: Post) => {
    return { params: { id: post.id.toString() } };
  });
  /*   console.log(dataAll); */
  return {
    paths: dataAll,
    fallback: true,
    /*     fallback: true, // See the "fallback" section below */
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { data: post, status } = await Axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );

  // Pass post data to the page via props
  return { props: { post } };
};
