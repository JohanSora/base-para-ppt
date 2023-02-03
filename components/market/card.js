import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CardMarket = ({ info }) => {
  const route = useRouter();
  const [counter, setCounter] = useState(0);

  return (
    <div className="cardMarket">
      <div className="card-details">
        <figure>
          <img src={info.img} alt={info.name} />
        </figure>
        <p className="text-body">{info.name}</p>
        <p className="text-title">{info.price}DG</p>
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
            class="numberstyle"
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
      <div className="card-button">
        <div
          className="flex justify-center items-center w-2/4 cursor-pointer iconsAddCar"
          onClick={() => route.push("/shoppingCar")}
        >
          <svg
            width={35}
            height={35}
            fill="none"
            stroke="#d75050"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#d75050"
              stroke="none"
              d="M7.5 22.125a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
            />
            <path
              fill="#d75050"
              stroke="none"
              d="M17.25 22.125a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
            />
            <path d="M3.966 6.75h16.818l-2.259 7.912a1.5 1.5 0 0 1-1.444 1.088H7.67a1.5 1.5 0 0 1-1.444-1.088L3.047 3.544A.75.75 0 0 0 2.325 3h-1.2" />
          </svg>
          <svg
            width={25}
            height={25}
            fill="none"
            stroke="#d75050"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="plusCar"
          >
            <path d="M3.75 12h16.5" />
            <path d="M12 3.75v16.5" />
          </svg>
        </div>
        <div
          className="textCarShopping"
          onClick={() => route.push("/shoppingCar")}
        >
          <p>Comprar</p>
        </div>
      </div>
    </div>
  );
};

export default CardMarket;
