"use client";


import { Material } from "@/types/material";



interface MaterialCardProps {

  material: Material;

  onDelete: (id:string)=>void;

}



export default function MaterialCard({

  material,

   onDelete

}: MaterialCardProps){


  {material.parsed && (

  <p className="text-xs text-slate-500 mt-2">

    {material.parsed.pages} pages ·{" "}

    {material.parsed.words.toLocaleString()} words

  </p>

)}


  function getFileType(type:string){


    if(type.includes("pdf")){

      return "PDF Document";

    }


    if(
      type.includes("presentation") ||
      type.includes("powerpoint")
    ){

      return "PowerPoint Presentation";

    }


    if(
      type.includes("spreadsheet") ||
      type.includes("excel")
    ){

      return "Excel Spreadsheet";

    }


    if(
      type.includes("word")
    ){

      return "Word Document";

    }


    return "File";

  }




  function formatSize(size:number){


    if(size < 1024){

      return size + " B";

    }


    if(size < 1024*1024){

      return (
        (size/1024).toFixed(1)
        +
        " KB"
      );

    }


    return (

      (size/(1024*1024))
      .toFixed(1)
      +
      " MB"

    );

  }




  return (

    <div

      style={{

        border:"1px solid #ddd",

        borderRadius:"10px",

        padding:"16px",

        marginBottom:"15px"

      }}

    >


      <h3>

        📄 {material.name}

      </h3>



      <p>

        {getFileType(material.type)}

      </p>



      <p>

        {formatSize(material.size)}

      </p>



      <p>

        Uploaded:
        {" "}
        {material.uploadedAt}

      </p>



      <p>

        🟢 Ready for Analysis

      </p>

      <button

  onClick={()=>onDelete(material.id)}

  style={{

    marginTop:"10px",

    cursor:"pointer",

  }}

>

  🗑 Delete

</button>



    </div>

  );

}