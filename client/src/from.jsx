import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCreatenjpostMutation, useGetallpostdataQuery, useUpdatepostMutation } from "./store/apirtk";


export const From = ({fromdata, setfromdata}) => {
  // console.log(fromdata  )
  //post api
 
  const [createpost]=useCreatenjpostMutation();
  const [updatepost]=useUpdatepostMutation();
  const{refetch} =useGetallpostdataQuery();
 

  const handlesubmit = async(e) => {
    e.preventDefault();

if(fromdata._id){
const newobj={
  id:fromdata._id,
  body:fromdata
} 

 await updatepost(newobj)
}else{
  await createpost(fromdata)
}
await refetch()
   setfromdata({
    name: "",
    email: ""
  })
    
    }
  const handleonchaneinpurfrom = (e) => {
    const valuex = e.target.value;
    const namex = e.target.name;
    console.log(valuex)

    setfromdata((prev) => ({ ...prev, [namex]: valuex }))
  }






  return (
    <>

      <form action="">


        <div className="wDFSF50 border bg-body-tertiary p-2">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              NAME
            </label>
            <input
              value={fromdata.name}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder=" NAME"
              name="name"
              onChange={handleonchaneinpurfrom}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              EMAIL
            </label>
            <input
              onChange={handleonchaneinpurfrom}
              value={fromdata.email}

              name="email"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="EMAIL"
            />
            <div className="text-center">
              <button className="btn btn-info mt-3 mx-auto text-white fw-bolder" type="submit"
                onClick={handlesubmit}
              >{fromdata._id? "update":"submit"}</button>
            </div>
          </div>
        </div>

      </form>

    </>

  )
}