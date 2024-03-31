import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { HeroType } from "../types.ts";
import Gallery from "./Gallery.tsx";

const SearchForm: FunctionComponent<{ heroes: HeroType[] }> = ({ heroes }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredHeroes, setFilteredHeroes] = useState<HeroType[]>(heroes);

  useEffect(() => {
    if (query.length === 0) {
      setFilteredHeroes(heroes);
    } else {
      setFilteredHeroes(
        heroes.filter((h) => {
          if (!h.name || !h.image) return false;
          return h.name.toLowerCase().includes(query.toLowerCase());
        }),
      );
    }
    return () => {};
  }, [query]);

  return (
    <>
      <div class="searchForm">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={query}
          onInput={(e) => setQuery(e.currentTarget.value)}
          autoComplete="off"
        />
      </div>
      <Gallery
        heroes={filteredHeroes}
        columns={filteredHeroes.length > 4 ? 4 : filteredHeroes.length}
      />
    </>
  );
};

export default SearchForm;
