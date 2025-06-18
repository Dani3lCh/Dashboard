import { useState, useEffect } from "react";
import Clock from "./UI/Clock";
import Date from "./UI/Date";
import To_Do from "./UI/To_Do";
function Dashboard() {
  return (
    <>
      <section
        className="bg-cyan-950/90 w-[90%] h-[85vh] rounded-lg 
              mt-3  m-auto 
            "
      >
        <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full w-full p-8">
          <Clock />
          <div className="row-span-2 col-start-1 row-start-4 bg-white  rounded-lg w-full"></div>
          <Date />
          <To_Do />
          <div className="col-span-3 row-span-2 col-start-3 row-start-1 bg-white rounded-lg w-full">
            7
          </div>
          <div className="col-span-3 row-span-3 col-start-3 row-start-3 bg-white rounded-lg w-full">
            8
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
