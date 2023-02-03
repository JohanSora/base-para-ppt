import React from "react";

const Podio = () => {
  return (
    <div className="w-full h-2/4 grid grid-cols-4">
      <div className="flex flex-col gap-3 mr-auto">
        <figure>
          <img src="/assets/Icons/trofeos.png" width={50} className="w-max" />
        </figure>
        <p className="text-end font-bold text-3xl">
          Podio del <br /> primer del <br />
          <strong style={{ color: "#ff5c1e" }}>trimestre</strong>
        </p>
      </div>
      <div className="flex gap-2 col-start-2 col-end-4">
        <div className="flex flex-col justify-end w-44">
          <p className="text-center font-bold">John Doe #2</p>
          <div
            className="h-4/6 flex items-end px-5 rounded-t-3xl justify-center"
            style={{ backgroundColor: "#00405d" }}
          >
            <p className="text-white">${"1234"}</p>
          </div>
        </div>
        <div className="flex flex-col justify-end w-44">
          <p className="text-center font-bold">John Doe #1</p>
          <div
            className="h-full flex items-end px-5 rounded-t-3xl justify-center"
            style={{ backgroundColor: "#ff9a00" }}
          >
            <p className="text-white">${"1234"}</p>
          </div>
        </div>
        <div className="flex flex-col justify-end w-44">
          <p className="text-center font-bold">John Doe #3</p>
          <div
            className="h-2/4 flex items-end px-5 rounded-t-3xl justify-center"
            style={{ backgroundColor: "#ff5c1e" }}
          >
            <p className="text-white">${"1234"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podio;
