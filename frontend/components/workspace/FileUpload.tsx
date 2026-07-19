"use client";

import { Material } from "@/types/material";

import {
  saveMaterial,
  deleteMaterial
} from "@/services/storage/material.service";

import MaterialCard from "@/components/MaterialCard";
import { parsePDF } from "@/services/document";

interface FileUploadProps {

  materials: Material[];

  setMaterials: (
    materials: Material[]
  ) => void;

}



export default function FileUpload({

  materials,

  setMaterials

}: FileUploadProps){
  function handleDelete(id:string){


  deleteMaterial(id);



  setMaterials(

    materials.filter(

      item=>item.id !== id

    )

  );


}



  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ){


    const file = e.target.files?.[0];


    if(!file){

      return;

    }



    const parsed = await parsePDF(file);

const material: Material = {

  id: crypto.randomUUID(),

  name: file.name,

  type: file.type,

  size: file.size,

  uploadedAt: new Date().toLocaleString(),

  parsed,

};



    saveMaterial(material);



    setMaterials(

      [
        ...materials,

        material

      ]

    );


  }





  return (

    <div

      style={{

        marginTop:"40px",

        borderTop:"1px solid #ddd",

        paddingTop:"30px"

      }}

    >


      <h2>
        Evidence Library
      </h2>



      <p>

        {materials.length} file(s)

      </p>



      <input

        type="file"

        accept=".pdf,.ppt,.pptx,.xlsx,.doc,.docx"

        onChange={handleUpload}

      />



      <div

        style={{

          marginTop:"30px"

        }}

      >


        {

          materials.length===0 ? (

            <p>
              No files uploaded.
            </p>


          ) : (

            materials.map(

  item=>(

    <MaterialCard

      key={item.id}

      material={item}

      onDelete={handleDelete}

    />
           )

        )
    )
}
  </div>
     </div>

    )
}