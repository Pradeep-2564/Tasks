
import './grandChild.css'
const GrandChild = ({year})=>{

    return(
        <div className="grandchild">
            <h4>GrandChild Component</h4>
            <p><b>Publication year: </b>{year}</p>
        </div>
    )
}

export default GrandChild