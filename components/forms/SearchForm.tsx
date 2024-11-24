import Form from "next/form";
import ResetFormBtn from "../shared/ResetFormBtn";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        className="search-input"
        placeholder="Search Startups"
        defaultValue={query}
      />

      {query && <ResetFormBtn />}

      <button type="submit" className="search-btn text-white">
        <Search />
      </button>
    </Form>
  );
};

export default SearchForm;
