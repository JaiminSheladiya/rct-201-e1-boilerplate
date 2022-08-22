import { useEffect, useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [nums,setNums]=useState<number[]>([]);

  useEffect(()=>{
    setNums([...initialArray]);
  },[initialArray])

  const list=()=>{
    return nums;
    }
  
    const appendStart=(int:number)=>{
      let newlist:number[]=[];
      newlist.push(int);
      nums.map((elm,i)=>{
          newlist.push(elm);
      })
      setNums([...newlist])
      return nums;
    }
    const appendEnd=(int:number)=>{
      let newlist:number[]=[];
      nums.map((elm,i)=>{
          newlist.push(elm);
      })
      newlist.push(int);
      setNums([...newlist]);
      return nums;
    }
    
    const popStart=()=>{
      let newlist:number[]=[];
      nums.map((elm,i)=>{
        if(i>0){
          newlist.push(elm);
        }
      })
      setNums([...newlist])
      return nums;
    }
    
    const popEnd=()=>{
      let newlist:number[]=[];
      nums.map((elm,i)=>{
          newlist.push(elm);
      })
      newlist.pop();
      setNums([...newlist])
      return nums;
    }
    
    const clear=()=>{
      setNums([]);
      return nums;
    }
    
    const reset=()=>{
      setNums([...initialArray]);
      return nums;
    }
    
      return {
        list: list,
        appendStart: appendStart,
        appendEnd: appendEnd,
        popStart: popStart,
        popEnd: popEnd,
        clear: clear,
        reset: reset
      };
};

export default useNumberList;
