
import { useState, useEffect } from "react";
import "../../style/ClockComponent.css";


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
 

  return (
    <div
      className="col-span-2 row-span-2  rounded-lg border border-white/30"
    id="clock"

    >
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex items-baseline gap-2">
          <div className="text-9xl font-semibold text-red-500">
            {horaString}
          </div>
          <div className="text-2xl font-semibold text-red-500 opacity-75 self-end mt-2">
            {ampm}
          </div>
        </div>
      </div>
    </div>
  );
}