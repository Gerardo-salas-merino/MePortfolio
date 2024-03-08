/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import GitHub from "../assets/socials/github.svg";
import { TypeAnimation } from "react-type-animation";
import { IoLogoWhatsapp } from "react-icons/io";


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {

  function openWhatsAppChat() {
    // Reemplaza 'número-de-WhatsApp' con tu número de WhatsApp
    const phoneNumber = '2215335358';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }

  return (
    <section className="my-8 md:py-8 px-7 relative" id="home">
      
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:w-1/2">
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8 dark:text-white ">
            GERARDO SALAS MERINO
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Diseñando para el futuro, un sitio web ala vez.",
              1000,
              "Programando el funcionamiento interno de la web.",
              1000,
              "Creando experiencias digitales de extremo a extremo",
              1000,
              "Desarrollando aplicaciones desde todos los ángulos.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light dark:text-white text-xl my-8">
           Un desarrollador web centrado en el frontend que construye el frontend de sitios web 
           y aplicaciones web que conduce al éxito del producto general.
          </p>
          
          <div className="grid gap-4 justify-center lg:flex md:flex lg:gap-10 md:gap-10">
            {/* button dowload CV */}
            <a href="/CV_Gerardo_Merino.pdf" download>
              <button className="btn py-3 px-10 dark:bg-[#f06] dark:hover:bg-blue-500" style={{ borderRadius: '3px 3px 15px 3px' }}>
                Descargar CV
              </button>
            </a>

            {/* button contact whatsapp */}
            
            <button onClick={openWhatsAppChat} className="btn_2 py-3 px-10 dark:bg-black dark:hover:bg-green-500 flex justify-center items-center gap-1" style={{ borderRadius: '3px 3px 15px 3px' }}>
              Whatsapp
              <IoLogoWhatsapp  size={20} />
            </button>
            

          </div>
          

          


        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white dark:bg-bodyback  w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="https://www.linkedin.com/in/gerardo-salas-merino"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10 dark:text-white" />
          </a>
        </div>
        
        <div className="my-1">
          <a
            href="https://github.com/Gerardo-salas-merino"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
        
      </div>

 
    </section>
  );
};

export default Home;
