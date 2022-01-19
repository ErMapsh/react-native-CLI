import React, {useState} from 'react';
import UseStateHook from './component/UseStateHook';


export default function App() {
  const [counter, setcounter] = useState(0);
  const [flag, setflag] = useState(false)

  const plus = () => {
    // console.log("Addition");
    setcounter(counter + 1);
    setflag(false);
  };
  const minus = () => {
    if (counter > 0) {
      setcounter(counter - 1);
      setflag(false);
      // console.log("minus");
    }else{
      console.log("Value must greater than 1");
      setflag(true);
    }
  };
  return (
    <>
      <UseStateHook plus={plus} minus={minus} flag={flag} counter={counter}/>
    </>
  );
}
