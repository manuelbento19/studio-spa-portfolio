import { memo } from "react";

const Card = (props) =>{
    return(
        <li onClick={()=>props.open(props.url)} className='col-auto rounded border overflow-hidden cursor-pointer'>
            <img src={props.url} className='h-full w-full object-cover relative object-center shadow-xl hover:scale-110 duration-1000' alt=""/>
        </li>
    )
}
export default memo(Card);