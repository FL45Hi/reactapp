import React from 'react'
import Img from './Img'

function Gallery() {
    return (
        <div>
            <Img 
            lq="https://wallpapercave.com/wp/wp9323501.jpg"
            src="https://wallpapercave.com/wp/wp9323501.jpg" width="200px" height="400px"/>
            <Img src="https://wallpapercave.com/wp/wp9882323.jpg" width="200px" height="400px"/>
            <Img src="https://wallpapercave.com/uwp/uwp1774495.jpeg" width="200px" height="400px"/>
            <Img src="https://wallpapercave.com/uwp/uwp1774484.jpeg" width="200px" height="400px"/>
            
        </div>
    )
}

export default Gallery
