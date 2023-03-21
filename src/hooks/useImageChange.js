import { useState } from "react";

import isImageValid from "./isImageValid";

const useImageChange = () => {
   const [image, setImage] = useState("");
   const [error, setError] = useState("");

   const handleImageChange = (e) => {
      setImage("");
      setError("");

      if (e.target.files.length < 1) {
         return;
      }

      if (isImageValid(e.target.files[0])) {
         setImage(e.target.files[0]);
      } else {
         setError("Please upload an Image file.");
         e.target.value = "";
      }
   };

   return { image, error, handleImageChange, setError, setImage };
};

export default useImageChange;
