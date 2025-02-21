import React from "react";
import "./Parent.css"
import Child from "./Child";

const Parent = ()=>{

    const userData = {
        name: "Pradeep",
        age: 25,
        address: "Medak"
    }
    
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child name={userData.name} age={userData.age} address={userData.address} />
        </div>
    );
}
export default Parent