import { FreshContext, PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default ({ Component }: PageProps) => {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
};
