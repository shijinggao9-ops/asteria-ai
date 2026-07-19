import { Material } from "@/types/material";


const STORAGE_KEY = "materials";



export function getMaterials(): Material[] {

  if (typeof window === "undefined") {

    return [];

  }


  const data = localStorage.getItem(
    STORAGE_KEY
  );


  return data ? JSON.parse(data) : [];

}




export function saveMaterial(
  material: Material
) {


  const materials = getMaterials();


  materials.push(material);


  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(materials)

  );


}




export function deleteMaterial(
  id: string
) {


  const materials = getMaterials();


  const updatedMaterials = materials.filter(

    material => material.id !== id

  );


  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedMaterials)

  );


}