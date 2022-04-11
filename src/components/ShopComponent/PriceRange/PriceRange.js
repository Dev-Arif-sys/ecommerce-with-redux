import React from 'react';
import { Range } from 'react-range';
import './PriceRange.css';



const PriceRange = ({product,value,setValue}) => {
  
    const STEP = 10;
    const MIN = product.reduce((min,curr)=>{
        if(min>curr.price){
             min=curr.price
        }
        return min
    },product[0]?.price);
    const MAX = product.reduce((max,curr)=>{
        if(max<curr.price){
             max=curr.price
        }
        return max
    },product[0]?.price);

    console.log(value)
    return (
        <div>
              <h6>Price</h6>
           <hr className='mb-4'/>

           <Range
           
        step={0.1}
        min={MIN}
        max={MAX}
        values={value}
        onChange={(values) =>setValue([...values])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: 'yellow',
              
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: 'gray',
              borderRadius:"50%"
            }}
          />
        )}
      />

<output style={{ marginTop: "30px" }} id="output">
          {value[0].toFixed(1)}
        </output>
        </div>
    );
};

export default PriceRange;