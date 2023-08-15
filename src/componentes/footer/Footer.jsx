import React from "react";
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';




const Footer = () => {

    return(
        <footer>
            <div className="lineaPrincipal">
                <div className="linea1">
              {/*   <h2>hola</h2> */}
                </div>
                <div className="redes">
                    <a h href="https://www.facebook.com/pingpongclown2/" 
                    target='_blank'
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} className="facebook" />         
                    </a>
                    <a h href="https://www.instagram.com/pingpongclown/?hl=es" 
                    target='_blank'
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="instagram" />         
                    </a>
                    <a h href="https://www.youtube.com/@PingPongClown" 
                    target='_blank'
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="youtube" />         
                    </a>
                </div>
                <div className="linea2">
                {/* <h2>hola</h2> */}
                </div>
            </div>
                <p className="derechos">Todos los derechos reservados <br /><b>Silvina Ciampechini</b></p>
        </footer>
        )
    }
    
    export default Footer