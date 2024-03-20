import React from 'react';
import styled from 'styled-components';

const Box = (props) =>{
    // console.log("넘어오니?", props)
console.log(props.userBoxColor, props.computerBoxColor)

const userBoxStyle = {
    width: '200px',
    height: '600px',
    borderRadius: '500px',
    backgroundColor: `${props.userBoxColor}`,
    color: 'white'
};

const computerBoxStyle = {
    width: '200px',
    height: '600px',
    borderRadius: '500px',
    backgroundColor: `${props.computerBoxColor}`,
    color: 'white'
    
};

    return (
        
        <div className='center'>
           <h1 className='title'>{props.title}</h1>
           <img className='img' src={props.item && props.item.img} art='주먹'></img>          
           {/* 명확하게 정해지지 않는 값일경우 앞에 가드 넣어줘야 해 (props.item && ) */}
            <p className={`boxColor${props.computerBoxColor}`}></p>
            <p className={`boxColor${props.userBoxColor}`}></p>
            <h1 className='title'>{props.userResult}</h1>
            <h1 className='title'>{props.computerResult}</h1>
            
        </div>
    );
};

export default Box;