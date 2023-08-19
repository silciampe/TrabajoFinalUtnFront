import './Contacto.css';
import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

const handleSubmit = async (e) => {
    e.preventDefault();
  /* console.log(process.env.REACT_APP_EMAIL_USER_ID) */
    const { name, email, message } = formData;

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        user_id: process.env.REACT_APP_EMAIL_USER_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_params: {
            from_name:name,
            email,
            message,
          },
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({
          name:'',
          email:'',
          message:'',
        });
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <>
    <section className='sectionFormulario'>
        <div class="espacio">
                <div className="titulo"><strong>¡Podemos hacer grandes cosas juntos!</strong></div>
                    <div className="formulario">
                        <h3 className="consulta">Dejanos tu consulta</h3>
    <form className="form" onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        placeholder="Nombre y apellido"
        value={formData.name}
        onChange={handleChange}
        className='nombreTexto'
        required
        />
        <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="emailTexto"
        required
        />
        <textarea
        name="message"
        placeholder="Escribe aquí tú mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        />
        <button type="submit" className='boton' >Enviar</button>
    </form>
    </div>
    </div>
    </section>
</>
)
};

export default Contacto;




