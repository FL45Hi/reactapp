import React,{ useState, useEffect} from "react";

const Img = props => {
    return <img alt={props.alt || "Image"} {...props} />
}

// const Img = ({lq, src, ...props}) => {

//     const [url, setUrl] = useState(lq || src);

//     useEffect( ()=> {
//         if(url === lq)
//         fetch(src)
//         .then( r => r.blob())
//         .then( blob => {
//             const FR= new FileReader();
//             FR.onload = function() {
//                 setUrl(this.result)
//             };
//             FR.readAsDataURL(blob);
//         }), []
//     })
//     return <img alt={props.alt || "Image"} {...{ src, ...props}} />
// }

export default Img;