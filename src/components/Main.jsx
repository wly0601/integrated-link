import React from "react";
import axios from "axios";
import Result from "./Result";

const Main = () => {
  const [link, setLink] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef("");
  const [result, setResult] = React.useState([]);

  const getLinks = async () => {
    const get = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/link`);
    setLink(get.data);
  };

  React.useEffect(() => {
    getLinks();
  }, []);

  var data = [];
  if (link.length !== 0) {
    data = link.map(item => ({
      id: item.id,
      name: item.title,
      link: item.name
    }));
  }

  let content = <> </>;
  if (result && input !== "") {
    content = (
      <div className="container mt-5">
        <div className="row" key={0}>
          {result.map(item => (
            <Result output={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }

  const submitHandler = event => {
    event.preventDefault();
    setInput("");
  };

  const changeHandler = e => {
    let key = inputRef.current.value;
    setInput(inputRef.current.value);
    const res = data.filter(n => n.name.match(new RegExp(`.*${key}.*`, "i")));
    setResult(res);
  };

  return (
    <>
      <div style={{ width: "80%" }} className="container pt-3 mx-auto">
        <h2> Integrated Link </h2>
        <p style={{ marginBottom: 20 }}> Bank Mandiri Cabang Yos Sudarso </p>
        <div className="container pt-1">
          <form onSubmit={submitHandler}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                onChange={changeHandler}
                value={input}
                ref={inputRef}
                required
                className="form-control form-control-lg border-dark rounded-lg"
                placeholder="Silahkan cari link ..."
                style={{ height: "60px" }}
              />
            </div>
          </form>
        </div>
      </div>
      <>{content}</>
    </>
  );
};

export default Main;
