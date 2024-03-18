import React from "react";
import Main from "./Main";

const Option = () => {
  return (
    <div>
      <div style={{ height: 80 }} className="container-lg h-4 m-auto">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-sm py-4 font-weight-bold">
              {" "}
              <button type="button" className="btn btn-lg">
                Cari Link
              </button>{" "}
            </div>
            <div className="col-sm py-4 font-weight-bold">
              {" "}
              <button type="button" className="btn btn-lg">
                Masukkan Link Baru
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <Main opt={true} />
      </div>
    </div>
  );
};

export default Option;
