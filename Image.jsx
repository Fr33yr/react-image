import React from "react";

// this component only handles the image render
// and posible errors
const Image = ({ height, width, url }) => {
    const fallBackImage = 'https://via.placeholder.com/300x300' // imagen placeholder

    if(!url){
        return <img src={fallBackImage} height={height} width={width}/>
    }

    return(
        <img 
        src={url}
        height={height}
        width={width}
        onError={(e)=>{
            e.target.onerror = null
            e.target.src = fallBackImage
        }}/>
    )
}
