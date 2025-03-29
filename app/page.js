"use client";
import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addquery } from "./redux/query/queryhistory";
import { setquery, empty } from "./redux/interactions/queryinput";
import Sidebar from "./components/sidebar";
import Loader from "./components/loader";
import { showresults } from "./redux/interactions/showresults";
import ResultArea from "./components/resultarea";

const ContactPage = () => {
  const suggestions = useSelector((state) => state.querysuggestions.queries);
  const query = useSelector((state) => state.queryinput.value);
  const sidebar = useSelector((state) => state.sidebar.information);
  const resultindicator = useSelector((state) => state.resultindicator.value);
  const dispatch = useDispatch();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mathingsuggestion, setMathingsuggestion] = useState([]);

  const pageRef = useRef(null);
  const formRef = useRef(null);

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) setFormVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    if (!pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    let xpos = (e.clientX - rect.width / 2) / 25;
    let ypos = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({
      x: xpos,
      y: ypos,
    });
  };

  // Page load animation
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Form submission handler
  const submitquery = async (e) => {
    e.preventDefault();
    dispatch(showresults())
    dispatch(addquery(query));
    dispatch(empty());
  };

  const queryonchange = (e) => {
    dispatch(setquery(e.target.value));
    if (e.target.value != "") {
      let selectedsuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setMathingsuggestion(selectedsuggestions);
    } else {
      setMathingsuggestion([]);
    }
  };

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <section
        ref={pageRef}
        onMouseMove={handleMouseMove}
        className="pt-10 min-h-screen overflow-hidden relative transition-all duration-500"
        style={{
          width: sidebar ? "80%" : "100%",
          marginLeft: sidebar ? "20%" : "0%",
        }}
      >
        {/* Background elements */}
        <div className="fixed inset-0 dark:bg-gradient-to-br bg-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 opacity-90 z-0">
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="fixed top-1/4 left-1/4 w-80 h-80 dark:bg-blue-600/20 bg-blue-800/22 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="fixed bottom-1/3 right-1/4 w-54 h-64 dark:bg-purple-600/20 bg-purple-800/22 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Page Content */}
        <div style={{top:resultindicator?"280px":"0px",
          left:0,
          paddingTop:resultindicator?"20px":"96px",
          paddingBottom:resultindicator?"20px":"96px"
        }} className="container mx-auto px-6 transition-all duration-500 py-24 relative z-10">
          {/* Header */}
          <div
            className="text-center mb-6"
            style={{
              transform: isPageLoaded ? "none" : "translateY(20px)",
              opacity: (isPageLoaded && !resultindicator) ? 1 : 0,
              transition: "all 0.4s ease-in-out",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 ">
              Let's Analyse
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 mt-3 rounded-full"></div>
            <p className="text-xl md:text-2xl text-black dark:text-gray-300 max-w-2xl mx-auto">
              Have a question? I'd love to hear from you.
            </p>
          </div>

          <div
            ref={formRef}
            className={`transition-all duration-1000 delay-300 ${
              formVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div
              style={{
                transform: `translateY(${
                  mousePosition.y * 0.08
                }px) translateX(${mousePosition.x * 0.08}px)`,
                width: sidebar ? "72%" : "60%",
              }}
              className="relative p-1 rounded-xl max-lg:w-[70%] z-210 mx-auto bg-gradient-to-r transpo2 focus:shadow-2xl from-blue-500 via-purple-500 to-pink-500"
            >
              <div className="bg-slate-900 rounded-lg  z-210 relative">
                <div className="relative z-100">
                  <input
                    type="text"
                    id="query"
                    value={query}
                    onChange={queryonchange}
                    required
                    className="w-full queryinput bg-slate-800/80 text-lg border border-slate-700 rounded-lg py-3 px-4 pl-5 text-gray-200 placeholder-gray-500 focus:outline-none transition-all duration-300"
                    placeholder="What were the sales yesterday?"
                  />
                  <button
                    onClick={submitquery}
                    className="w-fit absolute top-1 right-1 cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg py-3 px-5 text-white font-medium flex items-center justify-center space-x-2 transition-all duration-300 transform hover:shadow-lg origin-center hover:shadow-blue-600/20"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <div className="absolute top-16 w-full left-0 text-black dark:text-white ">
                    {mathingsuggestion[0] &&
                      mathingsuggestion.map((suggestion, index) => {
                        if (index >= 4) return;
                        else
                          return (
                            <p
                              onClick={() => dispatch(setquery(suggestion))}
                              key={index}
                              className="border-b w-full cursor-pointer border-[#4c5b78] transpo1 hover:border-transparent pl-5 hover:rounded-xl py-3 dark:hover:bg-[#ffffff2c] hover:bg-slate-600/20"
                            >
                              {suggestion}
                            </p>
                          );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom keyframes for animations */}
        <style jsx global>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
      <Sidebar />
      <Loader/>
      <ResultArea/>
    </main>
  );
};

export default ContactPage;
