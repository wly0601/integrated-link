import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Modal from "react-modal";
const Main = ({ opt }) => {
  const manyItems = [...new Array(10000)].map((_, i) => ({
    id: i,
    name: `something${i}`,
    description:
      "Some description text, where the search will be performed too."
  }));

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = result => {
    console.log(result);
  };

  const handleOnSelect = item => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <div style={{ width: "80%" }} className="container mx-auto">
      <h2> Database Link </h2>
      <div style={{ marginBottom: 20 }}> Silahkan Cari Link </div>
      <ReactSearchAutocomplete
        items={manyItems}
        maxResults={5}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        fuseOptions={{ keys: ["name", "description"] }} // Search in the description text as well
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
