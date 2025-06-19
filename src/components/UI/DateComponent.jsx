
import { useState, useEffect } from "react";
import {calendar} from "lucide-react";
function DateComponent() {
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const obtenerDiaSemana = (fecha) => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[fecha.getDay()];
  };

  const obtenerDiaMes = (fecha) => {
    const dias = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return dias[fecha.getMonth()];
  };

  const obtenerDiaNumero = (fecha) => {
    return fecha.getDate();
  };

  const obtenerAnio = (fecha) => {
    return fecha.getFullYear();
  };

  const obtenerDiaSemanaActual = obtenerDiaSemana(fecha);
  const obtenerDiaMesActual = obtenerDiaMes(fecha);
  const obtenerDiaNumeroActual = obtenerDiaNumero(fecha);
  const obtenerAnioActual = obtenerAnio(fecha);


  //efecto hover
 const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };


  return (
    <div 
    className="col-start-1 row-start-3 bw-full
    bg-white/20 backdrop-blur-md rounded-lg border border-white/30"
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
      <div className="w-full h-full flex items-center justify-center font-mono  p-2">
        <h1>
          <calendar/>
          {obtenerDiaSemanaActual} {obtenerDiaNumeroActual} de {obtenerDiaMesActual} 
          {obtenerAnioActual}
        </h1>
      </div>
    </div>
  );
}

export default DateComponent;
