"use client";

import { useState } from "react";

import { Material } from "@/types/material";

interface AnalysisItem {
  title: string;
  content: string;
}

interface Props {
  analysis: AnalysisItem[];
   materials: Material[];

}

export default function AnalysisPanel({ analysis,
   materials
}: Props) {
  const [started, setStarted] = useState(false);

  return (
    <div
      style={{
        marginTop: "50px",
        borderTop: "1px solid #ddd",
        paddingTop: "30px",
      }}
    >
      <h2>Analysis</h2>
      <h3>
Research Materials
</h3>


{
  materials.length === 0 ? (

    <p>
      No materials uploaded.
    </p>

  ) : (

    materials.map(

      item=>(

        <p key={item.id}>

          📄 {item.name}

        </p>

      )

    )

  )
}

      {!started ? (
        <button
          onClick={() => setStarted(true)}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Start Analysis
        </button>
      ) : (
        <div>
          {analysis.length === 0 ? (
            <p>No research plan generated yet.</p>
          ) : (
            analysis.map((item) => (
              <div
                key={item.title}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  marginBottom: "15px",
                }}
              >
                <h3>{item.title}</h3>

                <p>{item.content}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}