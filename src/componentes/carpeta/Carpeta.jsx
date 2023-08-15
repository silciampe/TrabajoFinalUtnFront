import React from "react";
import './Carpeta.css';
import '../../assets/img/carpeta.pdf'

const Carpeta = () => {

    return(
        <div className="contenedorPadreCarpeta">
        <div className="contenedorCarpeta">
            <object data={require('../../assets/img/carpeta.pdf')} type="application/pdf" className="carpeta"></object>
        </div>
        </div>
        )
    }
    
    export default Carpeta