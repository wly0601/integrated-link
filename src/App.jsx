import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <Result /> */}
    </div>
  );
}

export default App;
