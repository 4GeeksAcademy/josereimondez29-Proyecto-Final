import React, { useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const CambioContraseña = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const id = localStorage.getItem("id");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Variable para rastrear si se ha enviado el formulario
    
    const isValidPassword = (password) => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#@!])[A-Za-z\d$#@!]{6,12}$/;
        return pattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Se marca como enviado el formulario
        setError(""); // Limpiar el mensaje de error al enviar el formulario
        setSuccess(false); // Limpiar el mensaje de éxito al enviar el formulario

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
        } else if (!isValidPassword(password)) {
            setError(
                <div>
                    <p>La contraseña no cumple con los siguientes requisitos de seguridad:</p>
                    <ul style={{ fontSize: '0.9em' }}>
                        <li>Al menos 1 letra entre [a-z]</li>
                        <li>Al menos 1 número entre [0-9]</li>
                        <li>Al menos 1 letra entre [A-Z]</li>
                        <li>Al menos 1 carácter de [$#@!]</li>
                        <li>Longitud mínima de la contraseña: 6</li>
                        <li>Longitud máxima de la contraseña: 12</li>
                    </ul>
                </div>
            );
        } else {
            actions.changePassword(password, id)
                .then(() => {
                    setSuccess(true);
                    setTimeout(() => {
                        setSubmitted(false); // Restablecer submitted después de 3 segundos
                        navigate(-1);
                    }, 3000);
                })
                .catch((error) => {
                    setError("Error al cambiar la contraseña: " + error.message);
                });
        }
    };

    const handleInputChange = () => {
        setError(""); // Limpiar el mensaje de error al editar los campos de contraseña
        setSuccess(false); // Limpiar el mensaje de éxito al editar los campos de contraseña
    };

    const handleGoBack = () => {
        setError(""); // Limpiar el mensaje de error al volver
        navigate(-1);
    };

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); handleInputChange(); }}
                    />
                </div>
                <div className="form-group">
                    <label>Confirma Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value); handleInputChange(); }}
                    />
                </div>
                {/* Validación del campo requerido solo si el formulario ha sido enviado */}
                {submitted && (password === "" || confirmPassword === "") && <p style={{ color: "red" }}>Debe completar todos los campos</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>¡Contraseña cambiada exitosamente!</p>}
                <div className="d-flex justify-content-around">
                    <button type="submit" className="btn btn-primario">Actualizar</button>
                    <button className="btn btn-secondary" onClick={handleGoBack}>Volver</button>
                </div>
            </form>
        </div>
    );
};