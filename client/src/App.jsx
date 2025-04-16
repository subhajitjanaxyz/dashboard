import { Table } from "./table";
import { From } from "./FROM.JSX";
import { useState } from "react";

const App=()=>{
    const [fromdata, setfromdata] = useState({
        name: "",
        email: ""
      })

 
    return(
 <>

<div className="">
<From fromdata={fromdata} setfromdata={setfromdata} />
<Table fromdata={fromdata} setfromdata={setfromdata}/>
</div>




</>
      
    )
}
export default App;