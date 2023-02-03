import React, { useState } from "react";

const CardShoppingCard = ({ info }) => {
  const [counter, setCounter] = useState(info.quantity);

  return (
    <div className="flex flex-col relative ">
      <div className="absolute w-5 text-center quitProduct rounded-full bg-secondary text-white">
        X
      </div>
      <div className="flex rounded-lg p-5 gap-4 border-red-700 border-double border-4">
        <div className="w-12">
          <figure>
            <img src={info.img} />
          </figure>
        </div>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-3xl font-semibold">{info.name}</p>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-col self-center gap-4">
            <p className="text-red-700 text-center">{info.price}DG</p>
            <div className="containerCounter flex justify-center">
              <button
                className="buttonminus"
                onClick={() => {
                  counter <= 0 ? null : setCounter(counter - 1);
                }}
              >
                -
              </button>
              <input
                className="numberstyle"
                type="number"
                id="counter"
                name="counter"
                min="0"
                max="50"
                placeholder="0"
                value={counter > 0 && counter}
                onChange={(e) => {
                  Number(e.currentTarget.value) <= -1
                    ? setCounter(0)
                    : setCounter(Number(e.currentTarget.value));
                }}
              ></input>
              <button
                className="buttonplus"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShoppingCard;
