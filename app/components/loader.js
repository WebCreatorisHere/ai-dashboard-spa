"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const resultindicator = useSelector((state) => state.resultindicator.value);
  const sidebar = useSelector((state) => state.sidebar.information);
  console.log(resultindicator)
  const delaymaker = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms * 1000));
  };
  useEffect(() => {
    const loader = document.querySelector(".loaderea");
    setTimeout(async () => {
      if (!loader) return;
      if (!resultindicator) return;
      loader.style.display = resultindicator ? "flex" : "none";
      loader.style.opacity = resultindicator ? 1 : 0;
      setTimeout(async () => {
        loader.style.opacity = 0;
        await delaymaker(0.2);
        loader.style.display = "none";
      }, 2000);
    },500)

  }, [resultindicator]);

  return (
    <div style={{width:sidebar?"80%":"100%",
      marginLeft:sidebar?"20%":"0%"
    }} className="loaderea justify-center transition-all duration-200 items-center h-full z-[110] absolute top-0 left-0 dark:bg-gray-800/467 bg-gray-200/467 opacity-0 hidden">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
