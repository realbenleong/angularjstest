import React from 'react'

const Toot =(props) =>{
    console.log(props)
    return (
        
        <div>
            <h5>Hello {props.name} which is {props.symptoms}.</h5>
            {props.children}
        </div>
    )
} 

export default Toot