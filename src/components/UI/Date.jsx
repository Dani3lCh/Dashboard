
import { useState, useEffect } from "react";

function Date() {

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
      <div className="w-full h-full flex items-center justify-center font-mono text-xl p-2">
        <h1>Miercoles 18 de junio 2025
         
        </h1>
        
      </div>
    </div>
  );
}

export default Date;
