import React from "react";
import FOOTERBG from "../assets/FOOTER BG.png";
import PHONE from "../assets/telephone-fill.png"
import ENVELOPE from "../assets/envelope-fill.png"
import PINMAP from "../assets/pin-map-fill.png"

function Footer() {
  return (
    <div className="relative">
      <div className="w-full h-[250px] object-cover">
        <div className="absolute bg-green-800/70 w-full h-[250px]" />
        <img className="w-full h-full object-cover" src={FOOTERBG} alt="" />
        <div className="absolute inset-5 md:inset-[10%] text-white">
          <div className="">
            <h2 className="text-xl md:text-2xl">Contact Us</h2>
            <div className="text-sm mx-3 md:mx-5 md:text-[18px]">
              <div className="flex">
                <img className="icon" src={PHONE} alt="" />
                <p className="my-1">Landline:</p>
              </div>
              <div className="flex">
                <img className="icon" src={ENVELOPE} alt="" />
                <p className="my-1">Email: </p>
              </div>
              <div className="flex">
                <img className="icon" src={PINMAP} alt="" />
                <p className="my-1">Address: 938 Aurora Blvd., Cubao, Quezon City</p>
              </div>
            </div>
            <div className="mt-4 text-sm md:text-[18px] font-medium">
              <h3>© 2024 Computer Engineering Department</h3>
              <h3>Technological Institute of the Philippines - Quezon City</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
