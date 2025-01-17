import React,{useEffect, useRef} from 'react'
import '../Assets/StyleSheets/ArrowStyle.css';
import { useHover } from 'react-haiku';

export default function HeadLineCharater(props) {
    const textRef = useRef();
    const { hovered, ref } = useHover();
    const addClass = () =>{
        ref.current.classList.add('rubberBand');
  
    }
    function remove(){
        setTimeout(function () { ref.current.classList.remove('rubberBand'); }, 2000);
        
    }
    useEffect(()=>{
        if(!hovered){
            remove();
        }else{
            addClass();
        }
    },[hovered])

    return (
        <>
            <span className={`text  ${props.mode==='light'?'text-body':'text-white'} }`} ref={ref}>
                {props.charater}
            </span>
        </>
    )
}
