import { Tv, PlayCircle, Image as ImageIcon } from 'lucide-react';

const BrotherSection = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-6 overflow-hidden font-sans bg-slate-950">
      
      {/* 1. Fondo ambiental */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/dev.jpg" 
          alt="Background" 
          className="w-full h-full object-cover filter brightness-[1.1] contrast-110 scale-105 animate-pulse duration-[4000ms]"
        />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Luces neón */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-blue-600/30 rounded-full blur-[110px] pointer-events-none animate-pulse duration-[3000ms]"></div>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-indigo-600/25 rounded-full blur-[110px] pointer-events-none animate-pulse duration-[5000ms]"></div>

      {/* 2. Contenedor Principal */}
      <div className="relative z-10 max-w-6xl w-full space-y-8 mt-12">
        
        {/* Cabecera */}
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">My brother</h1>
          </div>
        </div>

        {/* Layout Pro: Grid de dos columnas (Imagen Multimedia vs. Texto del Guion) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Columna 1: Contenedor de la Imagen con Marco de Neón de Lujo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-slate-950/80 backdrop-blur-xl p-3 rounded-3xl border border-blue-500/40 shadow-2xl overflow-hidden">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                
                {/* AQUÍ COLOCAS LA RUTA DE TU IMAGEN (Ejemplo: /father.jpg) */}
                <img 
                  src="/brother.jpg" 
                  alt="Father watching TV in the living room" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badge flotante decorativo */}
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                  <span className="text-xs font-bold tracking-wide text-blue-200">Brother is playing</span>
                </div>

              </div>
            </div>
          </div>

          {/* Columna 2: Textos del Guion con Estilo Pro */}
          <div className="bg-slate-950/70 backdrop-blur-lg p-8 sm:p-10 rounded-3xl border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.25)] space-y-6">
            
            <div className="flex items-center space-x-3">
              <PlayCircle className="w-7 h-7 text-blue-400 animate-pulse" />
              <h3 className="font-bold text-2xl text-white">My Brother's Activity</h3>
            </div>

            {/* Aplicando There is / There are y Present Continuous */}
            <div className="space-y-5 text-slate-100 text-lg leading-relaxed font-medium">
              <p className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                "My brother is <span className="text-emerald-300 font-bold">playing</span> soccer in the park, where <span className="text-emerald-300 font-bold">there are</span> many friends"
              </p>
              <p className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                "He <span className="text-emerald-400 font-bold">is running</span> very fast"
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BrotherSection;