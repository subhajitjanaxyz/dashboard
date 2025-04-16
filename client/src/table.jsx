import { useDispatch, useSelector } from "react-redux";
import { datainsert } from "./store/alldata";
import { useGetallpostdataQuery, useGetnjspostQuery } from "./store/apirtk";
import { useEffect } from "react";
// import { useEffect } from "react";

export const Table = () => {
  const dispatch = useDispatch();
  //global state
  const allData = useSelector((state) => state.dbdata);
  //calling get api
  // const { data, isLoading } = useGetnjspostQuery("67fcbc25a604384fa7d10511");
  const {data:allDatabase,isLoading:alldataLoading}=useGetallpostdataQuery();


  //when data come
  //  isloading =false and 
  // data add to global state
  useEffect(() => {
    if (!alldataLoading) {
      dispatch(datainsert(allDatabase));
    }
  }, [allDatabase, alldataLoading]);
  if (allDatabase){
    console.log(allDatabase)
  }

//when alldata=null=undefine=false
if(!allData){
  return <h1>loading ..............</h1>
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
          {
            allData.map((current,index)=>{
              return <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{current.name}</td>
              <td>{current.email}</td>
              <td>
                <button className="btn btn-primary">edit</button>
                <button className="btn btn-danger ms-2">delete</button>
              </td>
            </tr>
            })
          }
          
        </tbody>
      </table>
    </>
  );
};
