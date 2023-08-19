import React from "react";
import './Principal.css'
import informacion from '../../assets/img/informacion.jpg'
import nosotros from '../../assets/img/nosotros.jpg'
import gorravirtual1 from '../../assets/img/gorravirtual1.jpg'
import { Link } from 'react-router-dom';
/* import * as THREE from 'three' */

const Principal = () => {

    return(
        <div className="contenedorPrincipal">
        <div className="contenedor">
            <div className="contenedorinformacion">
            <Link to='/carpeta' >
                <div className="informacion">
                    <img src={nosotros} alt="nosotros" className="nosotrosfoto"/>
                </div>
                <h3 className="hinformacion"><br />Información seria </h3>
            </Link>
            </div>
            <div className="contenedornosotros">
            <Link to= '/Nosotros' >
                <div className="nosotros">
                    <img src={informacion} alt="informacion"  className='informacionfoto'/>
                </div>
                <h3 className="hnosotros"><br /> Sobre Nosotros</h3>
            </Link>
            </div>
            <div className="contenedorgorra">
            < Link to= '/Gorra '>    
                <div className="gorra">
                    <img src={gorravirtual1} alt="gorravirtual" className="gorrafoto"/>
                </div>
                <h3 className="hgorra"><br /> Gorra Virtual</h3>
            </Link>
            </div>
            <div className="burbujas">
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
            </div>
        </div>
        </div>
    )
}

export default Principal