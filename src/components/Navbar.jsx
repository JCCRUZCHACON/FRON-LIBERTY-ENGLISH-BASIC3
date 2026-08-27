import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Home, Tv, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isProfileActive = location.pathname === '/';
  const isHouseActive = location.pathname === '/house';
  const isFatherActive = location.pathname === '/father';
  const isMotherActive = location.pathname === '/mother';
  const isBrotherActive = location.pathname === '/brother';
  const isGranfatherActive = location.pathname === '/grandfather';

  // Cierra el menú al hacer clic en una opción en móvil
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================
          NAVBAR PARA PC (Desktop) - Se mantiene igual
         ========================================= */}
      <nav className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-950/85 backdrop-blur-2xl border border-indigo-500/40 p-2 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.35)] items-center gap-2 max-w-[95vw] overflow-x-auto">
        <Link 
          to="/" 
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm tracking-wide transition-all duration-500 overflow-hidden group whitespace-nowrap ${
            isProfileActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.8)] border border-indigo-300/50 scale-105' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
          }`}
        >
          <User className={`w-4 h-4 ${isProfileActive ? 'text-white animate-pulse' : 'text-indigo-400'}`} />
          <span>Profile</span>
        </Link>

        <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

        <Link 
          to="/house" 
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm tracking-wide transition-all duration-500 overflow-hidden group whitespace-nowrap ${
            isHouseActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.8)] border border-purple-300/50 scale-105' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
          }`}
        >
          <Home className={`w-4 h-4 ${isHouseActive ? 'text-white animate-pulse' : 'text-purple-400'}`} />
          <span>Family & Home</span>
        </Link>

        <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

        <Link 
          to="/father" 
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm tracking-wide transition-all duration-500 overflow-hidden group whitespace-nowrap ${
            isFatherActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.8)] border border-blue-300/50 scale-105' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
          }`}
        >
          <Tv className={`w-4 h-4 ${isFatherActive ? 'text-white animate-pulse' : 'text-blue-400'}`} />
          <span>My Father</span>
        </Link>

        <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

        <Link 
          to="/mother" 
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm tracking-wide transition-all duration-500 overflow-hidden group whitespace-nowrap ${
            isMotherActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(219,39,119,0.8)] border border-pink-300/50 scale-105' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
          }`}
        >
          <Tv className={`w-4 h-4 ${isMotherActive ? 'text-white animate-pulse' : 'text-pink-400'}`} />
          <span>My Mother</span>
        </Link>

        <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

        <Link 
          to="/brother" 
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm tracking-wide transition-all duration-500 overflow-hidden group whitespace-nowrap ${
            isBrotherActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(5,150,105,0.8)] border border-emerald-300/50 scale-105' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
          }`}
        >
          <Tv className={`w-4 h-4 ${isBrotherActive ? 'text-white animate-pulse' : 'text-emerald-400'}`} />
          <span>My Brother</span>
        </Link>

        <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

        <Link 
          to="/grandfather" 
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs lg:text-sm tracking-wide transition-all duration-500 overflow-hidden group whitespace-nowrap ${
            isGranfatherActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_25px_rgba(217,119,6,0.8)] border border-amber-300/50 scale-105' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
          }`}
        >
          <Tv className={`w-4 h-4 ${isGranfatherActive ? 'text-white animate-pulse' : 'text-amber-400'}`} />
          <span>My Grandfather</span>
        </Link>
      </nav>


      {/* =========================================
          NAVBAR PARA MÓVIL (Mobile) - Menú Hamburguesa Flotante
         ========================================= */}
      <div className="md:hidden fixed top-4 right-4 z-[9999]">
        {/* Botón Hamburguesa */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-950/90 backdrop-blur-xl border border-indigo-500/50 p-3 rounded-2xl text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] focus:outline-none flex items-center justify-center transition-transform active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-indigo-400" /> : <Menu className="w-6 h-6 text-indigo-400" />}
        </button>

        {/* Menú Desplegable */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-64 bg-slate-950/95 backdrop-blur-2xl border border-indigo-500/40 rounded-3xl shadow-[0_0_40px_rgba(99,102,241,0.4)] p-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
            
            <Link 
              to="/" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isProfileActive ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <User className="w-5 h-5 text-indigo-300" />
              <span>Profile</span>
            </Link>

            <Link 
              to="/house" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isHouseActive ? 'bg-purple-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Home className="w-5 h-5 text-purple-300" />
              <span>Family & Home</span>
            </Link>

            <Link 
              to="/father" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isFatherActive ? 'bg-blue-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Tv className="w-5 h-5 text-blue-300" />
              <span>My Father</span>
            </Link>

            <Link 
              to="/mother" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isMotherActive ? 'bg-pink-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Tv className="w-5 h-5 text-pink-300" />
              <span>My Mother</span>
            </Link>

            <Link 
              to="/brother" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isBrotherActive ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Tv className="w-5 h-5 text-emerald-300" />
              <span>My Brother</span>
            </Link>

            <Link 
              to="/grandfather" 
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                isGranfatherActive ? 'bg-amber-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Tv className="w-5 h-5 text-amber-300" />
              <span>My Grandfather</span>
            </Link>

          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;