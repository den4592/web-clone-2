import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Latest from "./components/Latest";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Latest />
      <Subscribe />
    </div>
  );
}

export default App;
