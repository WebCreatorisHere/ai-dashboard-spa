import React from 'react'

const Contact = () => {
    return (
      <div className="cursor-pointer z-100 pashu rounded-2xl border bg-background max-2xl:hidden border-border p-[10px] flex justify-center gap-3 w-fit items-center">
        <div className="w-24.5 rounded-xl overflow-hidden relative">
          <img className="lady transpo4" src="images/lady.webp" alt="Lady" />
        </div>
        <div className="otherscontent flex flex-col justify-center items-center gap-2">
          <img className="w-8" src="svgs/call.svg" alt="call" />
          <a
            className="text-[16px] relative font-semibold overflow-y-hidden flex items-center justify-center h-[20px] w-full"
            href="https://tel:+18557170250"
          >
            <p className="absolute owner transpo4 text-foreground">
              +1(855) 717-0250
            </p>
            <p className="translate-y-full absolute transpo4 text-[#37EB05] buyer">
              +1(855) 717-0250
            </p>
          </a>
          <p className="uppercase text-[9px] leading-[14px] text-muted-foreground">
            incoming call
          </p>
          <img className="w-36 pt-2.5" src="svgs/sound.svg" alt="waves" />
        </div>
      </div>
    )
  }

export default Contact