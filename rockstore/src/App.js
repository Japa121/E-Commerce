import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header/>
          <div className="page-inner-content">
            <div className="section-title">
              <h3>Produtos Selecionados</h3>
              <div className="underline"></div>
            </div>

            <div className="main-content">
              <ProductsList />

            </div>
          </div>
        </main>
       </div>
    </Router>
  );
}
export default App;
