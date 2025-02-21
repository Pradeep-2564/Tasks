import './child.css'
import GrandChild from "./grandChild"

const Child = ({title,author,year})=>{
    return(
        <div className="child">
            <h4>Child component</h4>
            <p><b>Title: </b>{title}</p>
            <p><b>Author: </b>{author}</p>
            <GrandChild year={year}/>
        </div>
    )
}

export default Child