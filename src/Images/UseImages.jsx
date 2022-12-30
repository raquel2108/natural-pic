import { useContext } from "react";
import ImagenesContext from "../Context/ImagenesProvider";

function UseImages() {
  return useContext(ImagenesContext);
}

export default UseImages;