export function generateResearchPlan(
  description:string,
  objective:string
){


  const text =
    (
      description+
      objective
    )
    .toLowerCase();



  if(
    text.includes("market") ||
    text.includes("strategy") ||
    text.includes("expansion")
  ){

    return [

      "Market Opportunity Analysis",

      "Competitor Benchmark",

      "Customer & User Analysis",

      "Business Model Evaluation",

      "Entry Strategy Recommendation"

    ];

  }



  if(

    text.includes("research") ||
    text.includes("hypothesis") ||
    text.includes("model")

  ){

    return [

      "Literature Review",

      "Theory Framework",

      "Research Hypothesis",

      "Variable Design",

      "Methodology"

    ];

  }




  return [

    "Business Background",

    "Industry Analysis",

    "Problem Diagnosis",

    "Solution Design",

    "Recommendation"

  ];

}