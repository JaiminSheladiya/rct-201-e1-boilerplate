import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initialValues:number[];
  label:string;
};
const List2 = (props: List2Props) => {
  const [value,setValue]=useState<number>(0)
  const{list,appendStart,appendEnd,popStart,popEnd,clear,reset}=useNumberList(props.initialValues); 
  const handleChange=(e:any)=>{
    setValue(Number(e.target.value));
   }
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{props.label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      {
      list().map((el:number)=>{
     return <div key={el} data-testid="list2-element">{el}</div>
      })
      }

      <input data-testid="list2-input"  onChange={handleChange} value={value} />
      <button data-testid="list2-btn-append-end" onClick={(e)=>{appendEnd(value)}}>
        AppendEnd
      </button>
      <button data-testid="list2-btn-pop-start" onClick={(e)=>{popStart()}}>
        popfirst
      </button>
      <button data-testid="list2-btn-clear" onClick={(e)=>{clear()}}>
        clear
      </button>
      <button data-testid="list2-btn-reset" onClick={(e)=>{reset()}}>
      reset
      </button>
    </div>
  );
};

export default List2;
