import React, {useState, useRef, useEffect} from 'react';
import data from '../input/input.jsx'
import decodePartial from '../utils/decodePartial.jsx';

const Message = (props) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [factor, setFactor] = useState(1);

  const { inputKey } = props;
  const input = data.split(",");
  let i = 0;
  let string = '';
  while (i <= input.length - inputKey.length){
    string += decodePartial(input.slice(i,i + inputKey.length), inputKey);
    i += inputKey.length;
    if(i > input.length - inputKey.length) {
      string += decodePartial(input.slice(i,input.length), inputKey)
    }
  }

  const handleTitle = () => {
    setSubtitle("")
    if (string.search("Terima kasih") !== -1){
      setTitle("Yeay, mas imam telah menemukan pesan rahasianya :)")
      setCount(0);
      setFactor(1);
    } else {
      setTitle("Wadu, masih kurang tepat mas passwordnya")
      setCount(count+1);
      if(count*factor === 5){
        setSubtitle("First Clue : Salah satu student di FSW 13")
        setCount(0);
        setFactor(factor+1);
      } else if (count*factor === 10){
        setSubtitle("Second Clue : Yang paling cantik deh pokoknya")
        setCount(0);
        setFactor(factor+1);
      } else if (count*factor >= 15){
        setSubtitle("Gaada clue lagi mas, udah jelas :')")
        setCount(0);
      }
    }
  }

  useEffect(() => {
    handleTitle();
  }, [inputKey])

  return (
    <div className='container mx-auto mt-5 px-3'> 
      <h4 className="mb-3">{title}</h4>
      <h5 className="mt-3 mb-5">{subtitle}</h5>
      <p className="h5">{string}</p>
    </div>
  )
};

export default Message;