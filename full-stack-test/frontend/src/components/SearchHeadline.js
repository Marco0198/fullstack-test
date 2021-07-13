import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./style.css";
import GetHeadline from "./GetHeadline";

const SearchHeadline = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("/newsapi/headline").then((response) => {
      setItems(response.data.articles);
    });
  }, []);

  const filteredHeadline =
    search.length === 0
      ? items
      : items.filter((values) =>
          (values.author ? values.author : "")
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  return (
    <Fragment>
      <div>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
        />
      </div>
      <GetHeadline articles={filteredHeadline} />
    </Fragment>
  );
};

export default SearchHeadline;
