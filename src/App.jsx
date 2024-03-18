import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";
import Option from "./components/Option";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Option />
    </div>
  );
}

export default App;
