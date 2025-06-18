import {
  Focus,
  RotateCcw,
  Settings,
  Maximize,
  Play,
  Pause,
  RotateCcw as Reset,
  Cloud,
  Sun,
  CloudRain,
  SunSnow as Snow,
  Wind,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Clock() {
  const [hora, setHora] = useState(new Date());

  //actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  //formatear la hora
  const formatearHora = (hora) => {
    return hora.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  //funcion para formatear la hora
  const horaFormateada = formatearHora(hora);

  //efecto hover
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };
  return (
    <>
      <div
        className="col-span-2 row-span-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30"
        onMouseMove={handleMouseMove}
        style={{
          background: `
      radial-gradient(circle 300px at ${position.x}% ${position.y}%, 
        rgba(59, 130, 246, 0.3) 0%, 
        rgba(147, 51, 234, 0.2) 40%, 
        rgba(236, 72, 153, 0.1) 70%, 
        transparent 100%),
      rgba(255, 255, 255, 0.1)
    `,
        }}
      >
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-6xl font-mono text-black">{horaFormateada}</div>
        </div>
      </div>



      
    </>
  );
}
