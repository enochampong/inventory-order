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
'<button onClick={handleAdd}>+</button>
<button onClick={handleMinus}>-</button>
<>Item(S): {value}</>

</div>
    );
}
export default Calculate;