import React from "react";

const Heroe = ({data}) =>{
const{name,thumbnail:{path},thumbnail:{extension}} = data
    return (
        <div className="card">
                <div className="card-img">
                    <img src={`${path}.${extension}`} alt = {name}/>
                </div>
                <div className ="card-container">
                   <p className ="card-title">{name}</p>
                </div>
            </div>     
    )
}
export default Heroe