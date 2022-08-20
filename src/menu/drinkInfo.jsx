import React, { useRef, useState } from "react";

function DrinkInfo(props){
    return(
        <div>
            {props.items.map((item, index) => {
                return <div key={index} className="drinkItemWraper">
                <img style={{maxWidth: "100px", height: "100%"}} src={item.imageURL} className="drinkItemImg" />
                <div style={{paddingLeft:16}}>
                <h2>{item.itemName}</h2>
                <p style={{display: "block", width: "100%"}}>{item.description}</p>
                <p>{item.price}</p>
                </div>
                </div>
            })}
        </div>
    )
}

export default DrinkInfo;