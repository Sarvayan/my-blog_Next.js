import Post from "../../../../pages/Post";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const id = params.id;
  const post = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/post/" + id)
    .then((response) => response.json())

    .catch((error) => console.error("Error fetching posts:", error));
  return {
    title: post.title,
  };
}

function Page({ params }: PageProps) {
  return <Post params={Promise.resolve(params)} />;
}

export default Page;
