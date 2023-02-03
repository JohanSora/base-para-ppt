const locations = [
    {
      page: "/dashboard",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.25 15a4.875 4.875 0 1 0 0-9.75 4.875 4.875 0 0 0 0 9.75Z" />
          <path d="M14.568 5.428a5.093 5.093 0 0 1 1.322-.178 4.875 4.875 0 1 1 0 9.75" />
          <path d="M1.5 18.507a8.25 8.25 0 0 1 13.5 0" />
          <path d="M15.89 15a8.241 8.241 0 0 1 6.75 3.506" />
        </svg>
      ),
      iconactive: "",
      text: "Dashboard",
    },
    {
      page: "/participantes",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.25 15a4.875 4.875 0 1 0 0-9.75 4.875 4.875 0 0 0 0 9.75Z" />
          <path d="M14.568 5.428a5.093 5.093 0 0 1 1.322-.178 4.875 4.875 0 1 1 0 9.75" />
          <path d="M1.5 18.507a8.25 8.25 0 0 1 13.5 0" />
          <path d="M15.89 15a8.241 8.241 0 0 1 6.75 3.506" />
        </svg>
      ),
      iconactive: "",
      text: "Participantes",
    },
    {
      page: "/puntosporventas",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2c2c2c"
            stroke="none"
            d="M16.875 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
          <path d="M3.75 6.375V18a1.5 1.5 0 0 0 1.5 1.5h15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H5.672A1.903 1.903 0 0 1 3.75 6.44 1.875 1.875 0 0 1 5.625 4.5H18" />
        </svg>
      ),
      iconactive: "",
      text: "Puntos por ventas",
    },
    {
      page: "/reportes",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.875 7.875h-13.5a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-10.5a.75.75 0 0 0-.75-.75Z" />
          <path d="M6 4.125h14.625a.75.75 0 0 1 .75.75V16.5" />
        </svg>
      ),
      iconactive: "",
      text: "Reportes",
    },
    {
      page: "/digipoints",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.25v19.5" />
          <path d="M17.25 8.25A3.75 3.75 0 0 0 13.5 4.5h-3.375a3.75 3.75 0 0 0 0 7.5h4.125a3.75 3.75 0 0 1 0 7.5h-4.5A3.75 3.75 0 0 1 6 15.75" />
        </svg>
      ),
      iconactive: "",
      text: "Digipoints",
    },
    {
      page: "/productos",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.25 4.5H3.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75Z" />
          <path d="M15.75 8.25a3.75 3.75 0 0 1-7.5 0" />
        </svg>
      ),
      iconactive: "",
      text: "Productos",
    },
    {
      page: "/premios",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.25 7.5H3.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75Z" />
          <path d="M19.5 12v6.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V12" />
          <path d="M12 7.5v12" />
          <path d="M16.247 6.441C15.178 7.501 12 7.501 12 7.501s0-3.178 1.06-4.247a2.254 2.254 0 0 1 3.187 3.187v0Z" />
          <path d="M7.753 6.441C8.822 7.501 12 7.501 12 7.501s0-3.178-1.06-4.247A2.254 2.254 0 1 0 7.753 6.44v0Z" />
        </svg>
      ),
      iconactive: "",
      text: "Premios",
    },
    {
      page: "/cargaventas",
      icon: (
        <svg
          width={30}
          height={30}
          fill="none"
          stroke="#2c2c2c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m11.503 2.428-7.566 1.51-1.509 7.565a.75.75 0 0 0 .206.675l9.788 9.787a.741.741 0 0 0 1.06 0l8.483-8.484a.74.74 0 0 0 0-1.06l-9.787-9.787a.75.75 0 0 0-.675-.206v0Z" />
          <path
            fill="#2c2c2c"
            stroke="none"
            d="M7.875 9.375a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      ),
      iconactive: "",
      text: "Carga de Ventas",
    },
    {
      page: "/usuarios",
      icon: (
        <svg
          width={30}
          height={30}
          fill="#2c2c2c"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.4 10.801a6.356 6.356 0 0 1 2.569-2.034 3.75 3.75 0 1 1 5.062 0c.735.32 1.403.774 1.969 1.34a6.385 6.385 0 0 1 1.969-1.34 3.75 3.75 0 1 1 5.062 0A6.356 6.356 0 0 1 21.6 10.8a.749.749 0 0 1-.706 1.189.76.76 0 0 1-.494-.289 4.874 4.874 0 0 0-7.8 0l-.056.056h-.01l-.046.047-.029.02a.01.01 0 0 1-.002.006.009.009 0 0 1-.007.002l-.028.02-.028.018-.047.028h-.019l-.16.056h-.309l-.075-.018h-.028l-.084-.038-.028-.019a.44.44 0 0 1-.085-.056h-.009l-.028-.028h-.019c-.019-.019-.037-.028-.047-.047h-.01l-.055-.066a4.875 4.875 0 0 0-7.791.01.75.75 0 0 1-.6.31.75.75 0 0 1-.6-1.2Zm16.631 7.716a3.75 3.75 0 1 0-5.062 0A6.384 6.384 0 0 0 12 19.857a6.383 6.383 0 0 0-1.969-1.34 3.75 3.75 0 1 0-5.062 0A6.356 6.356 0 0 0 2.4 20.55a.75.75 0 0 0 .6 1.2h18a.75.75 0 0 0 .6-1.2 6.356 6.356 0 0 0-2.569-2.034Z" />
        </svg>
      ),
      iconactive: "",
      text: "Usuarios",
    },
  ];
  export default locations;