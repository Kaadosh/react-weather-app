import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloud</p>
      </div>
      <div className="flex items-center justify-between flex-row text-white py-3">
        <img
          src="hhtp://openweathermap.org/img/wn/01d@2x.png"
          alt="sun"
          className="w-20"
        />
        <p className="text-5xl">12°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel
            <span className="font-medium ml-1">8°</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemperatureAndDetails;
