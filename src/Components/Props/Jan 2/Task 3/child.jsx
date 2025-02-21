import './child.css'

const Child = ({name,phone,email})=>{
    
    return(
        <div className="child">
            <div className="grid-cont">
                <p><b>Name: </b>{name}</p>
                <p><b>Phone: </b>{phone}</p>
                <p><b>Email: </b>{email}</p>
            </div>
           
        </div>
    )
}

export default Child