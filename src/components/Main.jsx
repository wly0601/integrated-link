import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";
import Link from "react-dom";

const Main = ({ opt }) => {
  const [link, setLink] = React.useState([]);
  const getLinks = async () => {
    const get = await axios.get("http://localhost:8000/link");
    setLink(get.data);
  };

  React.useEffect(() => {
    getLinks();
  }, []);

  const manyItems = link.map((item, i) => ({
    id: i,
    name: item.title,
    link: item.name
  }));

  console.log(manyItems);
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = result => {
    console.log(result);
  };

  const handleOnSelect = item => {
    window.open(item.link);
  };

  const handleOnFocus = () => {};

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <div style={{ width: "80%" }} className="container mx-auto">
      <h2> Integrated Link </h2>
      <div style={{ marginBottom: 20 }}> Bank Mandiri Cabang Yos Sudarso </div>
      <ReactSearchAutocomplete
        items={manyItems}
        maxResults={5}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        fuseOptions={{ keys: ["name"] }} // Search in the description text as well
        showNoResultsText="Link Tidak Tersedia"
        autoFocus={true}
        styling={{
          zIndex: 0,
          height: "60px",
          boxShadow: "2px 2px 4px #000000",
          fontSize: "25px"
        }} // To display it on top of the search box below
      />
    </div>
  );
};

export default Main;
