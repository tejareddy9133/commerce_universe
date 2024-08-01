import logo from "./logo.svg";
import "./App.css";
import { Text } from "@chakra-ui/react";
import Allroutes from "./components/Allroutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
