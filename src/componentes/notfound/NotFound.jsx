import React from "react";
import './NotFound.css';
import notFound from '../../assets/img/notfound.avif'


const NotFound = () => {

    return(
        <div className="notFound">
        <center><img src={notFound} alt="notFound"  className='fotoNotFound'/></center>
        </div>
        );
    };
    
    export default NotFound