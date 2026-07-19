import { ResearchContext } from "@/types/research";



export async function runAnalysis(

  context: ResearchContext

) {



  const response = await fetch(

    "/api/analyze",

    {

      method:"POST",

      headers:{

        "Content-Type":"application/json"

      },

      body:JSON.stringify(context)

    }

  );





  if(!response.ok){

    throw new Error(

      "AI analysis failed"

    );

  }





  const data = await response.json();





  return data.result;



}
