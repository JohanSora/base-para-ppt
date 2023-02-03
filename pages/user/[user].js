import React from "react";
import ContainerContent from "../../components/containerContent";

const user = () => {
  return (
    <ContainerContent pageTitle={"Carga de Ventas"}>
      <div className="m-6 flex flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Adobe Market</h1>
        </div>
        <div className="p-5">
          <h2 className="font-bold">Información General</h2>
        </div>
        <div className="w-full flex justify-between">
          <div className="containerProgress">
            <div
              className="circular-progress"
              style={{
                background: `conic-gradient(#d75050 ${
                  90 * 3.6
                }deg, #ededed 0deg)`,
              }}
            >
              <div class="flip-card-imgPhoto">
                <div class="flip-card-inner-imgPhoto">
                  <div class="flip-card-front-imgPhoto">
                    <figure className="imgPhoto">
                      <img src={"/assets/dashboard/johndoe.jfif"} />
                    </figure>
                  </div>
                  <div class="flip-card-back-imgPhoto">
                    <p class="title-imgPhoto">90%</p>
                    <p>del porcentaje de tu perfil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/6 flex items-center">
            <form className="w-full grid grid-cols-2 h-fit">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Apellido</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Correo Electrónico</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Rol</span>
                </label>
                <span
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs p-3"
                >
                  Admin
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="p-5">
            <h2 className="font-bold">Información Personal</h2>
          </div>
          <div className="w-full flex items-center">
            <form className="w-full grid grid-cols-3 h-fit gap-y-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Dirección 1</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Dirección 2</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">País</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Estado</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Codigo Postal</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Ciudad</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Teléfono</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Educación</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Segmento</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default user;
