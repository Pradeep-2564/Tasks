import React from 'react'
import Child from './child'
import './Parent.css'


const Parent = ()=>{
    const getData = [
        {
            name: "Pradeep",
            phone: "54326564",
            email: "pradeep@gmail.com"
        },
        {
            name: "Prabha",
            phone: "87865090",
            email: "prabha@gmail.com"
        },
        {
            name: "Tarun",
            phone: "987389284",
            email: "tarun@gmail.com"
        }
    ]

    return(
        <div className='parent'>
            <h2>Parent Component</h2>
            <h4>Child Component</h4>

            {getData.map((user,index)=>(
                <Child
                    key={index}
                    name={user.name}
                    phone={user.phone}
                    email={user.email}
                />
            ))}

        </div>
    )
}

export default Parent