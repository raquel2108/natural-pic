import "./index.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect } from "react";
import useImages from "./Images/UseImages";

export default function App() {
  const { setImagenes } = useImages();

  useEffect(() => {
    async function getImagenes() {
    const url = `https://demo0670365.mockable.io/naturalpics`;
      const resultado = await axios(url);
      setImagenes(resultado.data.photos);
    }

    getImagenes();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
