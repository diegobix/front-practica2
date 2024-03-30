import { FunctionComponent } from "preact";
import { HeroType } from "../types.ts";
import Hero from "./Hero.tsx";

const Column: FunctionComponent<{ heroes: HeroType[] }> = ({ heroes }) => {
  return (
    <div class="column">
      {heroes.map((h) => <Hero hero={h} />)}
    </div>
  );
};

export default Column;
