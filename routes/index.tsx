import { Head } from "$fresh/runtime.ts";
import Gallery from "../islands/Gallery.tsx";

const region = Deno.env.get("DENO_REGION") || "none";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Components Beta</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-4xl font-bold">Fresh Components Beta</h1>
        <p>
          region : {region}
        </p>
        <Gallery current={region} />
      </div>
    </>
  );
}
