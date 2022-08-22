import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  initialValues: number[]
  label:string
};

const List1 = (props: List1Props) => {
  const [value,setValue]=useState<number>(0)
  const{list,appendStart,appendEnd,popStart,popEnd,clear,reset}=useNumberList(props.initialValues); 
  console.log(list())
  const handleChange=(e:any)=>{
   setValue(Number(e.target.value));
  }
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      {
      list().map((el:number)=>{
   return <div key={el} data-testid="list1-element">{el}</div>
      })
    }

      <input data-testid="list1-input" onChange={handleChange} value={value} />
      <button data-testid="list1-btn-append-start" onClick={(e)=>{appendStart(value)}}>
        {/* Append to start of list btn */}
        AppendStart
      </button>
      <button data-testid="list1-btn-pop-end" onClick={(e)=>popEnd()}>
      popEnd
        {/* po last element btn */}
      </button>
      <button data-testid="list1-btn-clear" onClick={(e)=>clear()}>
      clear
        {/* clear list and set empty button */}
      </button>
      <button data-testid="list1-btn-reset" onClick={(e)=>reset()}>
        {/* Reset list to default value btn */}
        reset
      </button>
    </div>
  );
};

export default List1;
