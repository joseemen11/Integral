import React from "react";
import Link from "next/link";
// import Logo from "/public/images/logo.png";
import Practices from "../../api/Practices";
import Logo from '/public/images/logo-ip.jpg'
import Image from "next/image";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className="relative bg-footer_bg z-10">
      <div className="pt-[100px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
        <div className="wraper">
          <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="w-[420px] xl:w-[355px] lg:w-[297px] pr-[125px] md:mb-[40px] lg:pr-0 relative text-left">
              <div className="mb-7">
                <Link
                  className="text-[45px] font-bold flex items-center text-white"
                  href="/"
                >
                  <Image src={Logo} alt="" />
                </Link>
              </div>
              <p className="text-white text-[16px] mb-[10px]">
                Redes Sociales
              </p>
              <ul className="overflow-hidden pt-[15px]">
                <li className="text-white float-left group ">
                  <Link
                    className="text-white transition-all group-hover:text-hover_text"
                    href="https://m.facebook.com/people/IntegralPro-SRL/100063030170218"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ti-facebook"></i>
                  </Link>
                </li>
                {/* <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    href="/"
                  >
                    <i className="ti-twitter-alt"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    href="/"
                  >
                    <i className="ti-linkedin"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    href="/"
                  >
                    <i className="ti-pinterest"></i>
                  </Link>
                </li>
                <li className="text-white float-left group ml-[15px]">
                  <Link
                    className="text-white transition-all group-hover:text-[#c0b596]"
                    onClick={SubmitHandler}
                    href="/"
                  >
                    <i className="ti-vimeo-alt"></i>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="w-[200px] md:w-full ml-auto md:mb-[40px] lg:pr-0 relative text-left ">
              <div className="mb-7">
                <h3 className="text-[28px] font-medium  font-heading-font text-white capitalize">
                  Menú
                </h3>
              </div>
              <ul>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-hover_text transition-all"
                    href="/home"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-hover_text transition-all"
                    href="/nosotros"
                  >
                    Nosotros
                  </Link>
                </li>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-hover_text transition-all"
                    href="/servicios"
                  >
                    Servicios
                  </Link>
                </li>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-hover_text transition-all"
                    href="/profesionales"
                  >
                    Profesionales
                  </Link>
                </li>
                <li className="relative mb-[8px] block">
                  <Link
                    className=" text-white hover:text-hover_text transition-all"
                    href="/contact"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-[15px] md:pl-[0px] md:mb-[40px] lg:pr-0 relative text-left ">
              <div className="mb-7">
                <h3 className="text-[28px] font-medium  font-heading-font text-white capitalize">
                  Áreas de Práctica
                </h3>
              </div>
              <ul>
               
                  <li className="relative mb-[8px] block" >
                    <Link
                      className="text-white hover:text-[#c0b596] transition-all"
                      onClick={ClickHandler}
                     href="/servicio-esp/Contabilidad-Externa"
                    >
                      Contabilidad
                    </Link>
                  </li>
            
                  <li className="relative mb-[8px] block" >
                    <Link
                      className="text-white hover:text-[#c0b596] transition-all"
                      onClick={ClickHandler}
                      href="/servicio-esp/Auditoría-Especializada"
                    >
                      Auditoría
                    </Link>
                  </li>
            
                  <li className="relative mb-[8px] block" >
                    <Link
                      className="text-white hover:text-[#c0b596] transition-all"
                      onClick={ClickHandler}
                     href="/servicio-esp/Gestión-Empresarial"
                    >
                      Gestión Empresarial
                    </Link>
                  </li>
            
                  <li className="relative mb-[8px] block" >
                    <Link
                      className="text-white hover:text-[#c0b596] transition-all"
                      onClick={ClickHandler}
                      href="/servicio-esp/Capacitación-Individual-y-Colectiva"
                    >
                      Capacitación
                    </Link>
                  </li>
            
              </ul>
            </div>
            <div className=" md:mb-[40px] lg:pr-0 relative text-left ">
              <div className="mb-7">
                <h3 className="text-[28px] font-medium  font-heading-font text-white capitalize">
                  Contáctanos
                </h3>
              </div>
              <ul>
                <li className="relative mb-[8px] block text-white">
                  Piso 4, Oficina 417.
                </li>
                <li className="relative mb-[8px] block text-white">
                Avenida 16 de Julio, Edificio Ex Hotel Plaza
                </li>
                <li className="relative mb-[8px] block text-white">
                  La Paz, Bolivia
                </li>
                <li className="relative mb-[8px] block text-white">
                  Teléfono: 70642519 - 70161196
                </li>
                <li className="relative mb-[8px] block text-white">
                  Email: integralprosrll@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wraper">
        <div className=" border-t-1 border-[rgba(192,181,150,.3)] relative">
          <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
          <p className="text-center text-white text-[14px] py-[20px]">
            {" "}
            Copyright | &copy; 2024 IntegralPro 
            
          {/* <span className=" text-left">hola</span> */}
          </p>
        </div>
        

      </div>
    </footer>
  );
};

export default Footer;
