import React from "react";
import { Code, BookOpen, User, PlayCircle, ImageIcon } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-6 pt-36 md:pt-28 overflow-hidden font-sans bg-slate-950">
      {/* 1. Imagen de fondo full screen */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/dev.jpg"
          alt="Background"
          className="w-full h-full object-cover filter brightness-[1.1] contrast-110 scale-105 animate-pulse duration-[4000ms]"
        />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. Luces de neón ambientales flotantes */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-indigo-600/30 rounded-full blur-[110px] pointer-events-none animate-pulse duration-[3000ms]"></div>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-600/25 rounded-full blur-[110px] pointer-events-none animate-pulse duration-[5000ms]"></div>

      {/* 3. Contenedor central */}
      <div className="relative z-10 max-w-5xl w-full space-y-10 my-auto">
        
        {/* Cabecera (Icono y Texto) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          {/* Avatar con su animación de rebote restaurada */}
          <div className="w-20 h-20 bg-indigo-600/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.8)] border border-indigo-400/60 overflow-hidden flex-shrink-0 animate-bounce duration-1000">
            <img
              src="/dev4.webp"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Hello everyone!
            </h1>
            <p className="text-indigo-200 font-semibold text-lg sm:text-2xl tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] mt-1">
              Full Stack Developer and English Student
            </p>
          </div>
        </div>

        {/* Tarjetas de contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Columna 1: Imagen con un solo contenedor limpio y borde delgado */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden bg-slate-950 border border-blue-500/40 shadow-2xl flex items-center justify-center">
              <img 
                src="/devAbout.avif" 
                alt="My Office" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Badge flotante decorativo */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                <span className="text-xs font-bold tracking-wide text-blue-200">My Office</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Textos del Guion con Estilo Pro */}
          <div className="bg-slate-950/70 backdrop-blur-lg p-8 sm:p-10 rounded-3xl border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.25)] space-y-6">
            <div className="flex items-center space-x-3">
              <PlayCircle className="w-7 h-7 text-blue-400 animate-pulse" />
              <h3 className="font-bold text-2xl text-white">My Profession</h3>
            </div>

            <div className="space-y-5 text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
              <p className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                I am a full stack developer. I work <span className="text-emerald-300 font-bold">building</span> web applications and <span className="text-emerald-300 font-bold">designing</span> databases.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;