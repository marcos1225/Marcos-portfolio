import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { showAlert } from '../alert/Alert'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showAlert('error', 'Error', 'Debe llenar los campos');
      return;
    }

    const serviceID = 'service_mp56lzh';
    const templateID = 'template_kdife7d';
    const userID = 'VjJxtzr-MWA06EWzZ';

    const templateParams = {
      to_name: 'Marcos Gonzalez Navarrete', 
      from_name: form.name,
      message: form.message,
      reply_to: form.email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        showAlert('success', 'Mensaje enviado', 'Tu mensaje ha sido enviado exitosamente, pronto Marcos te responderá.');
        setForm({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('Error al enviar el mensaje:', err);
        showAlert('error', 'Error', 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
      });
  };

  return (
    <section id="contacto" className="border-t-4 border-gray-100 dark:border-gray-800 dark:text-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-2xl text-lg text-classic-white aos-init" data-aos="fade-up" data-aos-duration="2000">
              ¿Interesado en trabajar juntos o tienes alguna pregunta? ¡No dudes en ponerte en contacto!
            </p>
            <div className="mt-8">
              <h2 className="mt-2 not-italic text-3xl font-bold mb-5 text-classic-white font-mono">Redes Sociales</h2>
              <div className="flex gap-5">
                <div data-aos="fade-right" data-aos-duration="2000">
                  <a href="https://www.instagram.com/marcos0964/" target="_blank">
                    <button className="transition-transform duration-300 transform hover:scale-110"><img  src="../svg/instagram.svg" alt="instagram" /></button>
                  </a>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  <a href="https://www.linkedin.com/in/marcos-gonzalez-navarrete/" target="_blank">   
                    <button className="transition-transform duration-300 transform hover:scale-110"><img src="../svg/linkedin.svg" alt="Linkedin" /></button>
                  </a>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                  <a href="https://github.com/marcos1225" target="_blank" rel="noopener noreferrer">
                    <button className="transition-transform duration-300 transform hover:scale-110 rounded-full w-10 h-10 dark:bg-white"><img className="ml-1" src="../svg/github.svg" alt="github" /></button>
                  </a>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                  <a href="https://wa.me/+50663549134?text=Hola,%20estoy%20interesado%20en%20tus%20servicios" target="_blank">
                    <button className="transition-transform duration-300 transform hover:scale-110">
                      <img src="../svg/whatsapp.svg" alt="whatsapp" />
                    </button>
                  </a>
                </div> 
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg lg:col-span-3 lg:p-12 dark:border-4 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="lg:flex lg:gap-5">
                <div className="lg:w-1/2 mb-5">
                  <label className="sr-only" htmlFor="name">Nombre</label>
                  <input
                    className="w-full rounded-lg border-gray-300 p-3 text-sm dark:bg-gray-900 dark:text-white dark:border-gray-700"
                    placeholder="Ingresa tu Nombre"
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:w-1/2">
                  <div>
                    <label className="sr-only" htmlFor="email">Correo</label>
                    <input
                      className="w-full rounded-lg border-gray-300 p-3 text-sm dark:bg-gray-900 dark:text-white dark:border-gray-700"
                      placeholder="Ingresa tu Correo"
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Mensaje</label>
                <textarea
                  className="w-full rounded-lg border-gray-300 p-3 text-sm dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  placeholder="Mensaje"
                  rows="8"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-classic-secundary text-white px-5 py-3 font-medium text-classic-white sm:w-auto dark:bg-classic-primary dark:text-black"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
