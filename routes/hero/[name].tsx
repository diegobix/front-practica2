import { Handlers, PageProps } from "$fresh/server.ts";
import Gallery from "../../islands/Gallery.tsx";
import { HeroType } from "../../types.ts";

type Data = {
  hero: HeroType;
};

export const handler: Handlers<Data> = {
  GET: async (_req, ctx) => {
    const { name } = ctx.params;
    const url = `https://supermondongo.deno.dev/${name}`;
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        return new Response(null, { status: res.status });
      }
      const heroes: HeroType[] = await res.json();

      return ctx.render({ hero: heroes[0] });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};

export default (props: PageProps<Data>) => {
  const hero = props.data.hero;

  return <Gallery heroes={[hero]} columns={1} />;
};
