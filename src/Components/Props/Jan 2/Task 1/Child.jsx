import "./Child.css"
import GrandChild from "./GrandChild";

const Child = ({name,age,address})=>{

    return(
        <div className="child">
            <h2>Child component</h2>
            <p><b>Name: </b>{name}</p>
            <p><b>Age: </b>{age}</p>
            <GrandChild address={address}/>
        </div>
    );
}
export default Child