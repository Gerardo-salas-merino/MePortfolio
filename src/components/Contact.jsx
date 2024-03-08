import Headline from "../shared/Headline";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";


const Contact = () => {
  const refForm = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_fm158hf";
    const templateId = "template_feagfxq";
    const API_KEY = import.meta.env.VITE_REACT_PUBLIC_KEY;

    // metedod de emailJS
    emailjs
    .sendForm(serviceId, templateId, refForm.current, {
      sender_name: refForm.current.sender_name.value,
      publicKey: API_KEY,
              
    })
    .then(
      (result) => {
        
        console.log('Email sent successfully:', result.text);
        toast.success("¡Mensaje enviado con éxito!", {position: "top-center"})

      },
      (error) => {
        console.error('Failed to send email:', error.text);
      }
    );

  };



  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mt-8 px-7 contact dark:bg-bodyback"
      id="contact"
    >
      <Headline
        title={"CONTACTO"}
        subtitle={
          "No dude en ponerse en contacto conmigo enviando el siguiente formulario y me comunicaré con usted lo antes posible."
        }
      />

      <div className="md:w-2/3 mx-auto bg-white dark:bg-bodyback md:px-16 px-8 py-8 rounded mb-32 shadow-2xl dark:shadow-custom-dark">
        
        <form onSubmit={handleSubmit} ref={refForm} className="lg:mx-[-30px] dark:text-black">
          
          <label className="dark:text-white" htmlFor="name">Nombre: </label>
          <input
            type="text"
            name="sender_name"
            id="name"
            placeholder="Introduzca su nombre"
            className="p-4"
            required

          />
          <label className="dark:text-white" htmlFor="email">Correo: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Introduzca su correo electronico"
            className="p-4"
            required
          />
          <label className="dark:text-white" htmlFor="message">Mensaje: </label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Ingrese su mensaje"
            className="p-4 mb-8"
            required
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm dark:bg-white dark:text-black">Enviar</button>
        </form>

       
        <ToastContainer />

      </div>
    </motion.div>
  );
};

export default Contact;
