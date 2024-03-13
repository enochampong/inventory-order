import React, {useState} from 'react';
function Calculate (){
    const [value,setValue]=useState(0);

    const handleAdd =() => {
         setValue(prevValue => prevValue + 1);
    };
    const handleMinus =() => {
        setValue(prevValue => prevValue -1);
    };
    return( 
<div>
    <>Item(S): {value}</>
<button onClick={handleAdd}>+</button>
<button onClick={handleMinus}>-</button>


</div>
    );
}
export default Calculate;