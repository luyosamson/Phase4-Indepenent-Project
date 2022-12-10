import React,{useState} from "react";


function NewPlantForm({onAddPlant}) {
  const [name,setName]=useState("")
  const [image,setImage]=useState("")
  const [price,setPrice]=useState("")


function handleAddPlant(e){
  e.preventDefault();

  const newItem = {
      name:name,
      image:image,
      price:price,
  };

  fetch("http://localhost:6001/plants",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newItem)
  })
  .then((r)=>r.json())
  .then((item)=>onAddPlant(item))


}

  return (
    <div className="new-plant-form">
      <h2>Upload Flower</h2>
      <form  onSubmit={handleAddPlant}>
         <input type="text" name="image" placeholder="Upload Flower" onChange={(e)=>setImage(e.target.value)}/>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>setName(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
