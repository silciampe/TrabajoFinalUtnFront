import React from "react";
import './Gorra.css';
import mercadoPago from '../../assets/img/MercadoPago_Logo.png'
import banco from '../../assets/img/banco.svg'
import { Link } from 'react-router-dom';

const Gorra = () => {

    return(
        <div className="contenedorDeImagenes">
            <div  className='mercadoPago'>
            <a h href="https://link.mercadopago.com.ar/pingpongclown2" 
                    target='_blank'
                    rel="noopener noreferrer">                                       
            <img src={mercadoPago} className="mercadoPagoImagen" />
            </a>
            </div>
            <Link to= '/Banco' >
            <div className='banco'>
            <img src={banco} className="bancoImagen"/>
            </div>
            </Link>
        </div>
        );
    };
    
    export default Gorra