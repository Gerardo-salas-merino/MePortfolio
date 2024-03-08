import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';



const Footer = () => {
  return (
    <div className="bg-black md:h-96 px-7 dark:bg-bodyback lg:mt-10 md:mt-10 mt-10">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between ">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            GERARDO SALAS MERINO
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Un desarrollador web centrado en el frontend que construye el frontend de sitios web
            y aplicaciones web que conduzcan al éxito general producto.
          </p>
        </div>
        {/* social icons */}
        <div className='my-3'>
          <h4 className="text-white font-bold text-2xl tracking-wide ">
            SOCIAL
          </h4>
          <div className='mt-5 flex gap-3'>
            <a href="" className='ml-1'><img src={linkedinIcon} alt="" className='w-7 h-7'/></a>
            <a href="" className='ml-1'><img src={githubIcon} alt="" className='w-7 h-7'/></a>
            
          </div>
        </div>
      </div>

      <hr className='text-slate-50 opacity-30 px-7'/>

      {/* copyright text */}
      <div>
        <p className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center'>© Copyright 2024. Made by <a href="" className='underline'>LALO.DEV</a></p>
      </div>
    </div>
  );
};

export default Footer;
