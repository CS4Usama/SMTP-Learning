import './App.css';
import {useState} from 'react';

function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);

  const onChangeHandler = (e) => {
    var sum = parseInt(val1)+parseInt(val2)+parseInt(val3);
    if(sum < 100) {
      var half = (100-sum)/2;
      setVal2(parseInt(val2)+Math.floor(half));
      setVal3(parseInt(val3)+Math.ceil(half));
  } else if(sum>100) {
      half = (sum-100)/2;
      setVal2(parseInt(val2)-Math.floor(half));
      setVal3(parseInt(val3)-Math.ceil(half));
  }
  console.log(val1, val2, val3, sum);
  }


  return (
    <div>
      <h3>PROGRESS BAR TESTING</h3>
      {/* <input type='range' min='0' max='100' value={val1} onChange={(e) => setVal1(e.target.value)} /> <br/> */}
      {/* <input type='range' min='0' max='100' value={val2} onChange={(e) => onChangeHandler(setVal2)} /> <br/> */}
      {/* <input type='range' min='0' max='100' value={val3} onChange={(e) => onChangeHandler(setVal3)} /> <br/> */}

      <input type='range' min='0' max='100' value={val1} onChange={(e) => onChangeHandler( setVal1(e.target.value))} /> <br/>
      <input type='range' min='0' max='100' value={val2} onChange={(e) => onChangeHandler( setVal2(e.target.value))} /> <br/>
      <input type='range' min='0' max='100' value={val3} onChange={(e) => onChangeHandler( setVal3(e.target.value))} /> <br/>
    </div>
  );
}

export default App;