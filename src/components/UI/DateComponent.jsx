
import { useState, useEffect } from "react";

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




  return (
    <div 
    className="col-start-1 row-start-3 bw-full
    rounded-lg border border-white/30"

      style={{
        background: "#0F172A"
      }}
    >
      <div className="w-full h-full flex items-center justify-center font-semibold  p-2">
        <h1 className="text-xl text-white">
          
          {obtenerDiaSemanaActual} {obtenerDiaNumeroActual} de {obtenerDiaMesActual} <span></span> 
          {obtenerAnioActual}
        </h1>
      </div>
    </div>
  );
}

export default DateComponent;
