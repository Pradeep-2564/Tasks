import React from 'react'
import './parent.css'
import Child from "./child"

const Parent = ()=>{
        const books = [
            {title: "Sachin @ 50",author: "Boria Majumdar",year: "1988"},
            {title: "Made In India",author: "Amitabh Kant",year: "1980"},
            {title: "Just Aspire",author: "Ajai Chowdhry",year: "1990"},
        ]
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            {books.map((book,index)=>(
                <Child
                    key={index}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                />
            ))}
        </div>
    )
}

export default Parent