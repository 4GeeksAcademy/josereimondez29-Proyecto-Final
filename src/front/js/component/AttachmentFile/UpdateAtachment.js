import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export const UpdateAtachment =()=> {
const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const { store, actions } = useContext(Context);
  const userId = localStorage.getItem("id");
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();

  const changeUploadFolder= async (e) => {
    try {
      setLoading(true); // Mostrar mensaje de carga
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.CLOUDINARY_PRESENT);
      formData.append("id", userId);
      formData.append("userType", userType);
  
      await actions.changeUploadImage(formData, userId, userType);
  
      setConfirmationMessage("Imagen cargada con éxito. Redirigiendo...");
  
      // Redireccionar a la página anterior después de tres segundos
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.error("Error uploading image:", error);
      setConfirmationMessage("Error al cargar la imagen. Inténtalo de nuevo.");
    } finally {
      setLoading(false); // Ocultar mensaje de carga
    }
  };

  const deleteFolder = async () => {
    try {
      await actions.deletePicture(userId);
      window.location.reload();
    } catch (error) {
      console.error(error);
      setConfirmationMessage("Error al eliminar la imagen de perfil.");
    }
  };
    return(
        <>
        HOLA
        </>
    )
}