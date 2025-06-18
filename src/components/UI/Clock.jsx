import { useState,useEffect } from "react";

export default function Clock() {
    const [hora,setHora] = useState(new Date());

    //actualizar la hora cada segundo
    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        },1000);
        return () => clearInterval(intervalo);
    },[])

    //formatear la hora
    const formatearHora = (hora) => {
        return hora.toLocaleTimeString('es-ES',{
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    }
    //funcion para formatear la hora
    const horaFormateada = formatearHora(hora);

    return (
        <div className="col-span-2 row-span-2 bg-white rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-center h-full w-full">
                <div className="text-6xl font-mono text-black">
                    {horaFormateada}
                </div>
            </div>
        
        
        </div>
    );
}

