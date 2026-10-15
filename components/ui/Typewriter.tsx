"use client";
import { useState, useEffect } from "react";
export default function Typewriter({text,speed=45}:{text:string;speed?:number}){
  const [displayed,setDisplayed]=useState("");
  const [done,setDone]=useState(false);
  useEffect(()=>{
    let i=0;
    const t=setInterval(()=>{if(i<text.length){setDisplayed(text.slice(0,i+1));i++;}else{setDone(true);clearInterval(t);}},speed);
    return ()=>clearInterval(t);
  },[text,speed]);
  return(
    <span style={{fontFamily:"Calibri,sans-serif",fontSize:"28px"}} className="text-navy-900 dark:text-white">
      {displayed}
      <span className="inline-block w-[2px] h-[28px] bg-gold-400 ml-1 align-middle" style={{animation:done?"blink 1s step-end infinite":"none"}}/>
    </span>
  );
}
