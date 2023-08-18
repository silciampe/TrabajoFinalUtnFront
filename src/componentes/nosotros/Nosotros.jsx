import React from "react";
import carrusel from '../carrusel'
import './Nosotros.css'
import { motion } from "framer-motion";

const Nosotros = () => {
    
    return (
    <>
    <motion.div className="contenedorCarrusel">
        <motion.div className="divCarrusel" drag='x' dragConstraints={{right: -10, left: -700}}>
        {carrusel.map(carruse => (
            <motion.div className="item">     
                <img src={carruse} alt="" />
            </motion.div>
        )
            )}
        </motion.div>
    </motion.div>
    <div className="contenedorVideos">
        <iframe className="video1" width="503" height="252" src="https://www.youtube.com/embed/_ezAibF0QmA" title="Ping Pong Clown (Trailer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="video2" width="503" height="252" src="https://www.youtube.com/embed/XA2pH9yrfQM" title="Cerita y Crayón juegan a ser magos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="video3" width="503" height="252" src="https://www.youtube.com/embed/MxybaVDlTsE" title="Cerita es modelo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="video4" width="503" height="252" src="https://www.youtube.com/embed/Mgvd6BYjkA8" title="Ping Pong Clown, personajes que bailan!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </>
    );
};

export default Nosotros;