import { Handlers, PageProps } from "$fresh/server.ts";
import { HeroType } from "../types.ts";
import SearchForm from "../islands/SearchForm.tsx";

type Data = {
  heroes: HeroType[];
};

export const handler: Handlers<Data> = {
  GET: async (_req, ctx) => {
    const url = "https://supermondongo.deno.dev/";
    try {
      const response = await fetch(url);
      const heroes: HeroType[] = await response.json();
      return ctx.render({ heroes });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};

export default (props: PageProps<Data>) => {
  const { heroes } = props.data;

  return (
    <main>
      <SearchForm heroes={heroes} />
    </main>
  );
};
