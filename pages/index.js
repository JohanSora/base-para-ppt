import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { userLoginData } from "../store/reducers/users.reducer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    return route.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title title="true">Adobe APC</title>
      </Head>
      <main className="mainIndex bg-primary fixed w-full z-10">
        <div className="container flex flex-col justify-center items-center h-screen w-full max-w-full">
          <div className="flex items-center justify-center w-5/12 h-3/4 relative">
            <div
              className="card w-[35rem] max-sm:w-full h-full lg:h-full xl:h-4/6 text-primary-content"
              style={{ backgroundColor: "#e4ddd8" }}
            >
              <div className="card-body items-center justify-between flex px-20 bg-primary">
                <div className="w-full flex justify-center">
                  <div className="flex gap-16">
                    <div className="adobeCo">
                      <figure className="flex">
                        <img src={"/assets/login/Ricoh.png"} />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="w-full gap-10 flex flex-col">
                  <form
                    className="form-control w-full flex items-center gap-10"
                    onSubmit={handleSubmit}
                  >
                    <div className="w-full">
                      <label className="label flex flex-col w-full items-start">
                        <input
                          required
                          type="email"
                          placeholder="Email"
                          className="input w-full text-black"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </label>
                      <label className="label flex flex-col w-full items-start">
                        <input
                          type="password"
                          placeholder="password"
                          className="input w-full text-black"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </label>
                    </div>

                    <button
                      className="btn btn-outline glass w-full text-white"
                      type="submit"
                    >
                      Iniciar Sesión
                    </button>
                  </form>
                  <a className="link link-primary text-white">
                    ¿Has olvidado la contraseña?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
