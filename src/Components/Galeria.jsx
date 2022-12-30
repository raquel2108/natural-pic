import "../assets/css/galeria.css";
import useImages from "../Images/UseImages";
import Icono from "./Icono";

export default function Home() {
  const { imagenes, setFavorito, favoritos } = useImages();

  for (let fav of favoritos) {
    fav.liked = true;
  }

  return (
    <>
      <div className="galeria grid-columns-5 p-3">
        {imagenes.map((imagen) => (
          <div
            className="foto"
            onClick={() => setFavorito(imagen)}
            key={imagen.id}
            style={{ backgroundImage: `url(${imagen.src.tiny})` }}
          >
            <Icono filled={imagen.liked} />

            <p>{imagen.alt}</p>
          </div>
        ))}
      </div>
    </>
  );
}