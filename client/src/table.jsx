import { useDispatch, useSelector } from "react-redux";
import { datainsert } from "./store/alldata";
import {
  useDeletpostMutation,
  useGetallpostdataQuery,
  useLazyGetnjspostQuery,
} from "./store/apirtk";
import { useEffect, useState } from "react";

export const Table = ({fromdata, setfromdata}) => {
  console.log("reRender")
  const dispatch = useDispatch();
  //all data
  const allData = useSelector((state) => state.dbdata);
  const {
    data: allDatabase,
    isLoading: alldataLoading,
    refetch,
  } = useGetallpostdataQuery();

  useEffect(() => {
    if (!alldataLoading) {
      dispatch(datainsert(allDatabase));
    }
  }, [allDatabase, alldataLoading]);

  //single data
  const [trigger, result] = useLazyGetnjspostQuery();
  const { data, isLoading } = result;
  const handleEdit = async (a) => {
    
   await  trigger(a);
  
    
    
  };

useEffect(()=>{
  if(result.status=="fulfilled"){
    console.log(data)
    setfromdata(data)
    }

},[result.status])

  //delete data
  const [deletepost] = useDeletpostMutation();

  //when alldata=null=undefine=false
  if (!allData) {
    return <h1>loading ..............</h1>;
  }

  //when alldata avalale
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">BUTTON</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((current, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{current.name}</td>
                <td>{current.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(current._id)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={async () => {
                      await deletepost(current._id);
                    
                      await refetch();
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
