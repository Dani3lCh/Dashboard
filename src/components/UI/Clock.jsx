
import { useState, useEffect } from "react";
export default function Clock() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  // Formatear hora y AM/PM por separado
  const obtenerHoraYAmPm = (fecha) => {
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const horas12 = horas === 0 ? 12 : horas > 12 ? horas - 12 : horas;
    const ampm = horas >= 12 ? 'PM' : 'AM';
    
    return {
      hora: `${String(horas12).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`,
      ampm: ampm
    };
  };

  const { hora: horaString, ampm } = obtenerHoraYAmPm(hora);

  // efecto hover
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
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
        <div className="flex items-baseline gap-2">
          <div className="text-7xl font-mono text-shadow-black">
            {horaString}
          </div>
          <div className="text-2xl font-mono text-shadow-black opacity-75 self-end mt-2">
            {ampm}
          </div>
        </div>
      </div>
    </div>
  );
}