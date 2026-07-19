"use client";

import { useEffect, useState } from "react";

const steps = [
  "Reading Research Brief",
  "Understanding Research Goal",
  "Loading Evidence Library",
  "Analyzing Industry",
  "Evaluating Competitors",
  "Generating Strategy",
];

export default function AiThinking() {

  const [step, setStep] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {

    const timer = setInterval(() => {

      setStep((prev) =>
        prev < steps.length - 1
          ? prev + 1
          : prev
      );

    }, 2500);


    const dotTimer = setInterval(() => {

      setDots((prev)=>{

        if(prev.length >= 3)
          return "";

        return prev + ".";

      });

    },500);


    return ()=>{

      clearInterval(timer);
      clearInterval(dotTimer);

    };


  },[]);


  return (

    <div
      className="
      mt-8
      rounded-2xl
      border
      bg-white
      p-8
      shadow-sm
      "
    >

      {/* AI Core */}

      <div className="flex flex-col items-center">


        <div
          className="
          text-5xl
          animate-pulse
          "
        >
          ✦
        </div>


        <h2
          className="
          mt-4
          text-xl
          font-semibold
          "
        >
          ASTERIA AI
        </h2>


        <p
          className="
          text-sm
          text-slate-500
          "
        >
          Local Intelligence
        </p>


      </div>



      {/* Progress */}

      <div className="mt-8">


        <div className="flex justify-between">

          <span className="text-sm font-medium">

            ● {steps[step]}

          </span>


          <span className="text-sm text-slate-400">

            Thinking{dots}

          </span>


        </div>



        <div
          className="
          mt-3
          h-2
          rounded-full
          bg-slate-200
          overflow-hidden
          "
        >

          <div
            className="
            h-full
            rounded-full
            bg-slate-900
            transition-all
            duration-700
            "
            style={{
              width:
              `${((step+1)/steps.length)*100}%`
            }}
          />


        </div>


      </div>



      {/* Timeline */}

      <div className="mt-8 space-y-3">


        {
          steps.map((item,index)=>(


            <div
              key={item}
              className="
              flex
              items-center
              gap-3
              "
            >

              <span>

                {
                  index < step
                  ? "✓"
                  : index === step
                  ? "●"
                  : "○"
                }

              </span>


              <span
                className={
                  index===step
                  ?
                  "font-medium"
                  :
                  "text-slate-400"
                }
              >

                {item}

              </span>


            </div>


          ))
        }


      </div>


    </div>

  );
}