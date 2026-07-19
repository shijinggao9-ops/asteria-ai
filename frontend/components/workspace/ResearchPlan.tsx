"use client";


import { useState } from "react";

import { generateResearchPlan } from "@/services/research.service";



interface ResearchPlanProps {

  description:string;

  objective:string;

  onGeneratePlan: (plan: string[]) => void;

}



export default function ResearchPlan({

  description,

  objective,

  onGeneratePlan

}:ResearchPlanProps){



  const [plan,setPlan] = useState<string[]>([]);


  const [generated,setGenerated] = useState(false);




  function handleGenerate(){


    const result = generateResearchPlan(

      description,

      objective

    );


    setPlan(result);

    setGenerated(true);

    onGeneratePlan(result);


  }





  return (

    <div

      style={{

        marginTop:"50px",

        borderTop:"1px solid #ddd",

        paddingTop:"30px"

      }}

    >



      <h2>

        Research Plan

      </h2>



      <p>

        Asteria will organize the research process based on your research task.

      </p>




      <button

        onClick={handleGenerate}

        style={{

          padding:"10px 20px",

          cursor:"pointer"

        }}

      >

        Generate Research Plan

      </button>






      <div

        style={{

          marginTop:"30px"

        }}

      >



        {

          generated && plan.map(

            (step,index)=>(


              <div

                key={step}

                style={{

                  border:"1px solid #ddd",

                  borderRadius:"8px",

                  padding:"15px",

                  marginBottom:"15px"

                }}

              >


                <strong>

                  {index+1}. {step}

                </strong>



                <p>

                  Ready for analysis

                </p>


              </div>


            )

          )

        }



      </div>



    </div>


  );


}