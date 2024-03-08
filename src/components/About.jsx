/* eslint-disable react/no-unescaped-entities */

import Headline from '../shared/Headline';
import skills from '../../public/skills.js'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 md:py-8 px-7 dark:text-white text-black dark:bg-bodyback' id='about'>
            <div>
                <Headline title={"Sobre mi"} subtitle={"Explorador de las Tecnologías de la Información en búsqueda constante de nuevos desafíos y oportunidades de aprendizaje.."}/>
            </div>

            {/* About content */}
            <div className='flex flex-col md:flex-row items-start justify-start'>
                {/* left side */}
                <motion.div 
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>¡Conóceme!</h4>
                    <div className='md:w-10/12 text-lg text-[#666] mb-8'>
                    <p className='mb-5'>Soy un <strong>Desarrollador Frontend</strong> enfocado en crear la interfaz de usuario de sitios web y aplicaciones web, estoy en constante aprendisaje para enfrentar cualquier reto. Échale un vistazo a algunos de mis proyectos en la sección de <strong>Proyectos</strong>.</p>

                    <p className='mb-5'>También disfruto compartir conocimientos sobre el desarrollo web y tecnologia. A lo largo de mi trayectoria, he adquirido conocimientos en el area del desarrollo frontend y un poco sobre el desarrollo backend. Te invito a Conectarte o Seguirme en mi LinkedIn, asi me ayudas a seguir mejorando como <strong>desarrollador. </strong><a href="https://www.linkedin.com/in/gerardo-salas-merino" className='text-[#f09] font-bold underline'>Linkedin</a>.</p>

                    <p className='mb-5'>Estoy en búsqueda constante de nuevos conocimientos y desafios, y estoy seguro de que puedo llegar a ser un profesional ya que puedo adaptarme al trabajo en equipo o individual. Estoy abierto a nuevas oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una oportunidad que coincida con mis habilidades, no dudes en <strong>contactarme</strong>.</p>
                    </div>

                    {/* <button className='btn py-4 px-14'>Contact</button> */}
                </motion.div>

                {/* right side */}
                <motion.div 
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}

                className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>Mis Habilidades</h4>
                    <div className='flex flex-wrap gap-3 md:w-10/12'>
                        {skills.map( skill => <p key={skill.id} className='bg-slate-300 text-light py-2 px-4 rounded'>{skill.title}</p>)}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;