import React from 'react';
import React, {useState} from 'react';

import axios from 'axios';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value, //forma dinamica
    }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        SetMsg('');
        setSending(true)
        const response = await
    axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

const ContactoPage = (props) => {
    return(
        <main class="holder contacto">
    <div>
        <h2>Deja tu solicitud</h2>
        <form className="formulario" onSubmit={handleSubmit}>
            <p>
                <label for="nombre solicitud">nombre de a quien debamos cambiar</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
            </p>
            <p>
                <label>Email</label>.
                <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            </p>
            <p>
               <label>telefono</label>
               <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
            </p>
            <p>
              <label for="mensaje">Breve explicación de la situación</label>.
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
            </p>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            <p className='centrar'><input type='submit' value="Enviar" /></p>   
        </form>
    </div>
    <div class="datos">
        <h2>Otras formas de contactarnos</h2>
        <ul>
            <li>telefono: **********</li>
            <li>Email: contacto@phantoms.com</li>
            <li>Facebook</li>
            <li>Twitter</li>
        </ul>
    </div>
    </main>
    );
}
}

export default ContactoPage;