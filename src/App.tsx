import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer/>
    </ShoppingCartContextProvider>
  );
}

export default App;
