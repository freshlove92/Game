import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 박스 두개 / 나 와 컴퓨터 = title /  사진 / 결과
//2. 가위바위보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값 + 사진이 보임
// ---------------------------- 4강까지
//4. 컴퓨터는 랜덤하게 나와야 함
//5. 3 4의 결과로 승패를 가린다
//6. 승패의 결과를 테두리 색으로 표현해준다(이기면 파랑, 지면 빨강, 비기면 검정)

const Choice ={
  rock: {
    name: "Rock",
    img: "./img/주먹.jpg"  
  },
  scissors: {
    name: "Scissors",
    img: "./img/가위.jpg"  
  },
  paper: {
    name: "Paper",
    img: "./img/보.jpg"  
  }

}

function App() {
  const [userSelect, setUserSelect]=useState()

  const play =(userChoice)=>{
    // console.log("여기다", userChoice)
    setUserSelect(Choice[userChoice])
  }

  return (
    <>
    <div className='main'>
    <Box title="나" item={userSelect}/>
    <Box title="컴퓨터"/>
    </div>
    <br />
    <br />
    <div className='main'>
    <button className='btn' onClick={()=>play("scissors")}>가위</button>
    <button className='btn' onClick={()=>play("rock")}>바위</button>
    <button className='btn' onClick={()=>play("paper")}>보</button>
    </div>
    </>
    
  );
}

export default App;
