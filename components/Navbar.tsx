import { FunctionComponent } from "preact";

const Navbar: FunctionComponent = () => {
  return (
    <nav>
      <a href="/">
        <span>Home</span>
      </a>
      <a href="/search">
        <span>Search</span>
      </a>
      <a href="/create">
        <span>Create</span>
      </a>
    </nav>
  );
};

export default Navbar;
