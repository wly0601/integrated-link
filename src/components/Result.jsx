import React from "react";
import axios from "axios";

const Result = () => {
  const getLinks = async () => {
    const get = await axios.get("http://localhost:8000/link");
    return get;
  };

  console.log(getLinks());
  return (
    <div className="py-5 container-fluid">
      <ul class="list-group mx-4">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
};

export default Result;
