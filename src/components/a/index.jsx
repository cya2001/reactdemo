import React from 'react'
import { useSectionInView } from '../../lib/hooks.ts'

export default function A() {

  const {ref} = useSectionInView('a');


  let componentHooks = [];
  let currentHookIndex = 0;


  const useState = (initialState)=>{
    let pair = componentHooks[currentHookIndex];
    if(pair){
      currentHookIndex++;
      return pair;
    }
    pair = [initialState,setState];

    function setState(nextState){
      pair[0] = nextState;
      console.log(pair)
      updateDOM();
    }
    componentHooks[currentHookIndex] = pair;
    currentHookIndex++;
    return pair;
  }

    // let count = 10;
    const [count,setCount] = useState(10);

  const updateDOM = ()=>{
    currentHookIndex = 0;
  }

  const handleClick = ()=>{
    setCount(count+1);
    console.log(count)
  };

  return (
    <div style={{ border: '6px solid #f56565', borderRadius: '0.5rem', padding: '1rem', 
      height:'30rem'
    }}
      id='a'
      ref={ref}
    >
      <button onClick={handleClick}>
        click to add!
      </button>
      <p>
        count:{count}
      </p>
    </div>
  )
}
