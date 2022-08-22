import { createSecureContext } from "tls";
import { useState,useRef } from "react";
const useClock = () => {
  // TODO
  let curr=new Date();

let Hours=curr.getHours();
let Minutes=curr.getMinutes();
let Sec=curr.getSeconds();

setInterval(():any=>{
  Hours=curr.getHours();
  Minutes=curr.getMinutes();
  Sec=curr.getSeconds();

  return {
    hours: Hours,
    minutes: Minutes,
    seconds: Sec,
   };
},1000)

  return {
    hours: Hours,
    minutes: Minutes,
    seconds: Sec,
   };
};

export default useClock;