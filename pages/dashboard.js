import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Graph from "../components/dashboard/graph";
import ContainerContent from "../components/containerContent";
import RankingTable from "../components/dashboard/rankingTable";
import { useSelector } from "react-redux";
import Podio from "../components/dashboard/podio";

const dashboard = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [ranking, setRanking] = useState(false);
  const table = useRef(null);
  const scroll = () => table.current.scrollIntoView();

  return (
    <ContainerContent pageTitle={"Dashboard"}>
      <div className="gap-10 flex flex-col h-full">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Inicio</h1>
          <h2 className="font-bold text-4xl">Hola, Ricoh</h2>
        </div>

        <Carousel
          sx={{ width: " 100%" }}
          mx="auto"
          withIndicators
          withControls={false}
          height={260}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide>
            <div
              style={{ backgroundColor: "black", height: "100%", zIndex: -1 }}
            >
              1
            </div>
          </Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel>

        <div className="container w-full h-full bg-base-100 flex justify-between">
          <div className="w-10/12 flex flex-col">
            <div className="w-full h-16 flex items-center gap-10">
              <div
                className="flex items-center h-full cct"
                style={{ width: "63px" }}
              >
                <p className="w-full text-center text-white">
                  <strong>Ricoh 1</strong>
                </p>
              </div>

              <div className="w-10/12 flex flex-col items-center justify-around h-full">
                <div className="w-full flex justify-around">
                  <p className="text-sm font-semibold">Enterprise</p>
                  <p className="text-sm font-semibold">Education</p>
                </div>
                <div className="w-full rounded-full bg-base-200 h-4"></div>
              </div>
            </div>
            <div className="w-full h-16 flex items-center gap-10">
              <div
                className="flex items-center h-full cci"
                style={{ width: "63px" }}
              >
                <p className="w-full text-center text-white">
                  <strong>Ricoh 2</strong>
                </p>
              </div>

              <div className="w-10/12 flex flex-col items-center justify-around h-full">
                <div className="w-full flex justify-around">
                  <p className="text-sm font-semibold">Enterprise</p>
                  <p className="text-sm font-semibold">Education</p>
                </div>
                <div className="w-full rounded-full bg-base-200 h-4"></div>
              </div>
            </div>
          </div>
          <div className="h-full "></div>
          <div className="flex flex-col justify-between items-center">
            <p>Estado de la Meta</p>
            <div
              className="radial-progress text-secondary"
              style={{
                "--value": 70,
                "--size": "6rem",
              }}
            >
              70%
            </div>
          </div>
        </div>
        <Graph />
        <Podio />
        <div className="w-full flex justify-center">
          <button
            className="btn btn-outline btn-warning"
            type="submit"
            onClick={() => {
              setRanking(!ranking);
              setTimeout(() => scroll(), 50);
            }}
          >
            Conoce el detalle
          </button>
        </div>
        <div ref={table}>{ranking && <RankingTable />}</div>
      </div>
    </ContainerContent>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: [1, 2, 3],
    },
  };
}

export default dashboard;
