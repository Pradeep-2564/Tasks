import "./GrandChild.css"

const GrandChild = ({address})=>{

    return(
        <div className="grandchild">
            <h3>Grandchild Component</h3>
            <p><b>Address: </b>{address}</p>
        </div>
    );
}
export default GrandChild