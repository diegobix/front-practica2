import { Handlers, PageProps } from "$fresh/server.ts";
import { HeroType } from "../types.ts";
import Gallery from "../islands/Gallery.tsx";

type Data = {
  heroes: HeroType[];
};

export const handler: Handlers<Data> = {
  GET: async (_req, ctx) => {
    const url = "https://supermondongo.deno.dev/";
    try {
      const res = await fetch(url);
      const heroes: HeroType[] = await res.json();

      return ctx.render({ heroes });
    } catch (e) {
      return new Response(`Error: ${e.message}`, { status: 500 });
    }
  },
};

export default (props: PageProps<Data>) => {
  const { heroes } = props.data;

  return (
    <main>
      <Gallery heroes={heroes} columns={4} />
    </main>
  );
};
