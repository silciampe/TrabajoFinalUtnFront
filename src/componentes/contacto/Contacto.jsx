import React from "react";
import './Contacto.css';


const Contacto = () => {

    return(
        <>
            <section>
        <div class="espacio">
                <div className="titulo"><strong>¡Podemos hacer grandes cosas juntos!</strong></div>
                    <div className="formulario">
                        <h3 className="consulta">Dejanos tu consulta</h3>
                        <form action="https://formspree.io/f/xoqbnznz" method="POST" class="form" id="form"> 
                            <div>
                                <label for="nombre"></label>
                                <input type="text" id="nombre" placeholder="Nombre y Apellido" name="nombre" required></input>
                            </div>
                            <div>
                                <label for="email"></label>
                                <input type="text" id="email" placeholder="Email" name="email" required></input>
                            </div>
                            <div>
                                <label for="mensaje"></label>
                                <textarea placeholder="Escribe aquí tu mensaje" id="mensaje" name="mensaje" required></textarea>
                            </div>
                            <div>
                                <button class="boton" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                    </div>    
    </section>
</>
)
}

export default Contacto
/*     <script>

    const formulario = document.getElementById('form')
    const userName = document.getElementById('nombre')
    const userEmail = document.getElementById('email')
    const userMensaje = document.getElementById('mensaje')

    const regUserName = /^[A-Za-zÑñÄáÉéÍíÓóÚú\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\-[_a-z0-9]+)*@[a-z0-9 ]+(\.[a-z0-9 ]+)*(\.[a-z]{2,15})$/;
        

    const enviar = () => {
        
        if (!regUserName.test(userName.value)) {
                alert('El Nombre no es válido');
                userName.focus()
                return false;
            }
           
        else if (!regUserEmail.test(userEmail.value)) {
                alert('El email no es válido');
                userEmail.focus()
                return false;
            }
        return true;                        
    }           
   
        let form = document.getElementById('form');

        form.addEventListener('submit', handlesubmit);

        async function handlesubmit(event) {
            event.preventDefault();
            let valido = enviar();
            if (valido == true) {
                let form= new FormData (this);
                let response = await fetch(this.action, {
                method: this.method, 
                body: form,
                headers:{
                    'Accept': 'application/json'
                }
                })
                if (response.ok) {
                    this.reset();
                    alert ('Gracias por contactarnos. A la brevedad nos comunicaremos contigo');
                }
            }
            
        }


    </script> */