import { FreshContext } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

// deno-lint-ignore require-await
export default async (req: Request, ctx: FreshContext) => {
  const Component = ctx.Component;
  const route = ctx.route.split("/").pop() || "home";

  return (
    <>
      <Navbar current={route as "home" | "search"} />
      <Component />
    </>
  );
};
