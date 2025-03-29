"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnoff } from "../redux/interactions/sidebar";
import { setquery } from "../redux/interactions/queryinput";
import { hideresults } from "../redux/interactions/showresults";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar.information);
  const rawqueries = useSelector((state) => state.queryhistory.queries);
  const [usablequeries, setuseblequeries] = useState([]);

  function dateformatter(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
  }

  useEffect(() => {
    let group = {};

    for (let i = 0; i < rawqueries.length; i++) {
      let queryobject = rawqueries[i];
      const formatteddate = dateformatter(queryobject.date);

      if (!group[formatteddate]) group[formatteddate] = [];
      group[formatteddate].push(queryobject.query);
    }

    // Here dates and queries are in ascending order we have to get them in descending order
    let modifiedqueries = Object.entries(group).map(([date, queries]) => {
      return { date, queries };
    });

    let reversedqueries = [];

    for (let i = 0; i < modifiedqueries.length; i++) {
      const element = modifiedqueries[i];
      reversedqueries[modifiedqueries.length - 1 - i] = element;
    }
    setuseblequeries(reversedqueries);
  }, [rawqueries]);

  return (
    <section
      style={{ transform: sidebar ? "translateX(0%)" : "translate(-100%)" }}
      className="absolute top-0 transition-all w-[20%] duration-500 left-0 h-full bg-white dark:bg-[#0F131F]"
    >
      <div className="justify-between flex pr-4 ">
      <div
        onClick={() => dispatch(turnoff())}
        className="w-11 relative top-3 left-3 hover:bg-[#f1f1ee] transpo2 p-2 cursor-pointer rounded-lg dark:hover:bg-gray-700"
      >
        <img className="dark:invert" src="images/sidebar.png" alt="open" />
      </div>
      <div
        onClick={() => dispatch(hideresults())}
        className="w-11 relative top-3 left-3 hover:bg-[#f1f1ee] transpo2 p-2 cursor-pointer rounded-lg dark:hover:bg-gray-700"
      >
        <img className="dark:invert" src="images/post.png" alt="post" />
      </div>
      </div>
      
      <div className="px-3.5">
        <h1 className="text-xl mt-6  font-semibold">Previous Queries</h1>
        <div className="mt-6 flex flex-col gap-6 h-[500px] pb-16 overflow-y-scroll">
          {usablequeries[0] &&
            usablequeries.map((everything, index) => {
              return (
                <div key={index} className="flex flex-col ">
                  <h2 className="text-sm mb-2 font-semibold">
                    {everything.date}
                  </h2>
                  {everything.queries &&
                    everything.queries.map((query, index) => {
                      return (
                        <p
                          onClick={() => {
                            dispatch(setquery(query))
                          }}
                          key={index}
                          className="text-sm hover:bg-[#f1f1ee] dark:hover:bg-gray-700 dark:text-white text-[#000000ec] rounded-md cursor-pointer p-1.5 px-2.5"
                        >
                          {query}
                        </p>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
