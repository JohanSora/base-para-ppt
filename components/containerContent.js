import Head from "next/head";
import React from "react";

const ContainerContent = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main
        className="container w-full px-8 pt-10"
        style={{ paddingTop: "35px" }}
      >
        <div className="gap-10 flex flex-col h-full">{children}</div>
      </main>
    </>
  );
};

export default ContainerContent;
