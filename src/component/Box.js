import React from 'react';


const Box = (props) => {
    console.log("넘어오니?", props)
    
    return (
        
        <div >
           <h1 className='title'>{props.title}</h1>
           <div className='Box'>
           <img className='img' src={props.item && props.item.img} art='주먹'></img>
           {/* 명확하게 정해지지 않는 값일경우 앞에 가드 넣어줘야 해 (props.item && ) */}
            </div>
            <div className='rebox'>
            <h1>결과</h1>
            </div>
        </div>
    );
};

export default Box;