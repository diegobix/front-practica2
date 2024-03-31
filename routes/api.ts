import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST: async (req, _ctx) => {
    const url = "https://supermondongo.deno.dev/";
    const { name, image, sound, creator } = await req.json();
    if (!name || !image || !sound || !creator) {
      return new Response("Some field is missing", { status: 400 });
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, image, sound, creator }),
      });
      if (res.status === 400) {
        return new Response("Bad request", { status: 400 });
      }
      const data = await res.json();
      return new Response(data, { status: 201 });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
  DELETE: async (req, _ctx) => {
    const { name, creator } = await req.json();
    if (!name || !creator) {
      return new Response("Some field is missing", { status: 400 });
    }
    const url = `https://supermondongo.deno.dev/${name}`;
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creator }),
      });

      if (res.status === 404) {
        return new Response("Hero or creator not found", { status: 404 });
      }
      if (res.status === 400) {
        return new Response("Bad requiest", { status: 400 });
      }
      return new Response(null, { status: 204 });
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  },
};
