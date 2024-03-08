import Headline from "../shared/Headline.jsx";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
     

  return (
    <div className='max-w-7xl mx-auto md:py-8 px-7 dark:bg-bodyback' id="projects">
      <Headline title={'Proyectos'} subtitle={'En esta seccion encontrarás los distintos proyectos que e desarrollado durante mi trayectoria '}/>
      
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto mt-8 px-7 contact dark:bg-bodyback"
        
      >

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">

          {/*GIT MUSIC  */}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/GitMusic.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Git Music 🎧</h1>
              <div className="overflow-hidden h-[142px]">
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Api de Spotify donde podrás escuchar la musica de tus artistas favoritos. </p>
                <button onClick={() => window.open('https://spotify-app-sage.vercel.app', '_blank')} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 cursor-pointer">VER PROYECTO</button>
              </div>
              
            
            
            </div>
                  
          </div>

          {/*RICK AND MORTY */}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/RickAndMorty.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Rick and Morty 👽</h1>
              <div className="overflow-hidden h-[142px]">
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Api de Rick y morty donde podrás encontrar a todos los personajes de la serie.</p>
                <button onClick={() => window.open('https://rick-and-morty-two-sigma.vercel.app', '_blank')} class="cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">VER PROYECTO</button>
              </div>
                    
            </div>
                  
          </div>
          
          {/* POKEDEX*/}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Pokedex.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Pokedex 🔎</h1>
              <div className="overflow-hidden h-[142px]">
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Api de Pokémon donde podrás encontrar a todos los personajes Pokémon de la serie.</p>
                <button onClick={() => window.open('https://pokemon-app-nu-five.vercel.app')} class="cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">VER PROYECTO</button>
              </div>
              
            </div>
                  
          </div>

          {/* SHOPPING */}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Ecommerce.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Shopping 🛒</h1>
              <div className="overflow-hidden h-[196px] lg:h-[142px] md:h-[142px]">
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Desarrollo de una API REST para un E-commerce que te permitirá realizar compras seguras, gestionar tu carrito de compras, explorar catálogos de productos.</p>
                <button onClick={() => window.open('https://luxury-axolotl-eafa0e.netlify.app')} class="cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">VER PROYECTO</button>
              </div>
            
            </div>
                  
          </div>

          {/*SEGURITY FACE */}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg ">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/SegurityFace.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Segurity Face 📷</h1>
              <div className="overflow-hidden h-[142px]">
                <p class="mb-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Desarrollo de proyecto integradora en el que se utilizó IoT Sensor
                  Esp32 cam y consiste en una cerradura con reconocimiento facial,
                  el cual se desarrolló en Arduino junto con Python. Además de una
                  aplicacion movil hecha con Cordova y Android Studio, guardando
                  la información en una base de datos de Mongo DB.

                </p>
              
              </div>
              
            </div>
                  
          </div>


          {/* MOVIES APP */}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/MoviesApp.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Movies App 🎬</h1>
              <div className="overflow-hidden h-[172px] lg:h-[142px] md:h-[142px]">
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Desarrollo de una Api Rest para una aplicacion de titulos de peliculas donde podras ver los diferentes titulos.</p>
                <button onClick={() => window.open('https://grand-biscotti-ac2827.netlify.app')} class="cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">VER PROYECTO</button>
              </div>
              
            </div>
                  
          </div>

          {/* WEATHER APP */}
          <div class="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
            <div class="h-96 w-[100%]">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/weatherapp.png" alt="" />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Wheather App⛅</h1>
              <div className="overflow-hidden h-[142px]">
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Weather api donde podras explorar el comportamiento del clima y de sus alrededores.</p>
                <button onClick={() => window.open('https://weather-app-neon-six-64.vercel.app')} class="cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">VER PROYECTO</button>
              </div>
              
            </div>
                  
          </div>
        
        </div>

      </motion.div>    
         
            
            
    </div>
            

       
  );
};

export default Projects;