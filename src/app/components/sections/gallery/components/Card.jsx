import { useRef } from "react";
import { useState } from "react";
import { memo, useEffect } from "react";

const Card = (props) =>{
    const cardRef = useRef(false);
    const [show,setShow] = useState(false)

    function loadImage(){
        setTimeout(()=>setShow(true),1000)
    }
    useEffect(()=>{
        const observer = new IntersectionObserver((entry)=>{
            if(entry[0].isIntersecting){
                const image = document.createElement('img')
                image.src = props.url;
                image.onload = loadImage;
            }
        })
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    },[])
    
    return(
        <li ref={cardRef} onClick={()=>props.open(props.url)} className={`${!show && 'skeletton'} col-auto min-h-[300px] rounded border overflow-hidden cursor-pointer`}>
            {show && <img src={props.url} className='h-full w-full object-cover relative object-center shadow-xl hover:scale-110 duration-1000' alt=""/>}
        </li>
    )
}
export default memo(Card);