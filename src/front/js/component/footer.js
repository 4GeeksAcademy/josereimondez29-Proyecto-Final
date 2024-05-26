import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import MediConecta from "../../img/MediConecta.jpg"
 

export const Footer = () => {

  const email = "mediconecta1@gmail.com";
  const subject = "Consulta";

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;


  return(
	<footer className="footer mt-auto py-3 text-center">

      <div className="container-fluid px-md-5">
        <div className="row mb-5">
          
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Especialidades</h2>
              <div className="">
                <ul className="list-unstyled">
                  <li><Link className="dropdown-item-footer" to="/Dermatologia">Dermatología</Link></li>
                  <li><Link className="dropdown-item-footer" to="/Fisioterapia">Fisioterapia</Link></li>
                  <li><Link className="dropdown-item-footer" to="/MedicinaGeneral">Medicina General</Link></li>
                  <li><Link className="dropdown-item-footer" to="/Nutricion">Nutrición</Link></li>
                  <li><Link className="dropdown-item-footer" to="/Pediatria">Pediatría</Link></li>
                  <li><Link className="dropdown-item-footer" to="/Psicologia">Psicología</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Conócenos</h2>

              <ul className="list-unstyled">
                <li><a href="/">Inicio</a></li>
                <li><a href="/alldoctors">Doctores</a></li>
                <li><a href="/contact">Contáctenos</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">

              <div className="">
                  <a href="/"><img src={MediConecta} alt="MediConecta" style={{borderRadius:"50%"}}/></a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Servicios</h2>

              <ul className="list-unstyled">
                <li> <span className="icon-long-arrow-right mr-2" style={{color:"#ffff"}}>Lunes a Viernes</span> </li>
                <li> <span className="icon-long-arrow-right mr-2" style={{color:"#ffff"}}>9.00 - 17.00 h</span></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contacto</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <a href={mailToLink} className="email-text" >{email}</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ color: "#ffff", width: "100%", margin:"0", paddingTop:"15px"}}>
          <div className="col-md-12 text-center">
            <p>Todos los derechos reservados | Web diseñada por Diana Pérez - José Reimondez - Rubén Marcos para <a href="https://4geeksacademy.com/es/inicio" target="_blank" rel="noopener noreferrer">4geek</a> © Copyright 2024</p>
          </div>
        </div>
    </footer>
  
  )
    
};
