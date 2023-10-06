import { useRef } from "react";
import { useState } from "react";
import { memo, useEffect } from "react";

const Card = (props) =>{
    const cardRef = useRef(false);
    const [show,setShow] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver((entry)=>{
            if(entry[0].isIntersecting)
            setShow(true)
        })
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    },[])
    
    return(
        <li ref={cardRef} onClick={()=>props.open(props.url)} className='col-auto rounded border overflow-hidden cursor-pointer'>
            {show && <img src={props.url} className='h-full w-full object-cover relative object-center shadow-xl hover:scale-110 duration-1000' alt=""/>}
        </li>
    )
}
export default memo(Card);